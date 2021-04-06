import type {
  IBlockData,
  IBulletData,
  ICommandData,
  IGameRunner,
  ILevelState,
  ILocalGame,
  IMoveCommandPayload,
  ITankData,
  IXY,
} from "../types";

import { Command, DIR, TANK_SIZE } from "../constants";
import { AITank } from "../shared/gameplay//AITank";
import { PlayerTank } from "../shared/gameplay//PlayerTank";
import { Tank } from "../shared/gameplay/Tank";
import { Bullet } from "../shared/gameplay/Bullet";
import type { Block } from "../shared/gameplay/Block";
import { levels } from "../shared/levels";
import { buildLevel } from "../utils/level";
import { Server, Socket } from "socket.io";
import { Body } from "./gameplay/Body";
import { randomInt } from "../utils/random";
import { AABBIntersects } from "../utils/collisions";

const PLAYER_SPAWN_SPOTS: IXY[] = [
  { x: 128, y: 384 },
  { x: 256, y: 384 },
];

const ENEMY_SPAWN_SPOTS: IXY[] = [
  { x: 0, y: 0 },
  { x: 190, y: 0 },
  { x: 386, y: 0 },
];
// this.playerTank = new PlayerTank(128, 384, this, DIR.UP);
const ENEMY_RESPAWN_TIME = 5000;

export class GameRunner implements IGameRunner {
  id: string;
  tanks: Tank[] = [];
  bullets: Bullet[] = [];
  levelId: number;
  blocks: (Block | null)[] = [];
  interval: NodeJS.Timeout;
  lastEnemySpawnTime = 0;

  io: Server;
  players: {
    [key: string]: PlayerTank;
  } = {};

  constructor(levelId: number, io: Server) {
    this.id = Math.floor(Math.random() * 100000).toString();

    this.levelId = levelId;
    this.io = io;

    this.tanks = [];
    this.bullets = [];

    ENEMY_SPAWN_SPOTS.forEach((spot) =>
      this.tanks.push(new AITank(spot.x, spot.y, this, DIR.DOWN))
    );
    this.lastEnemySpawnTime = Date.now();

    const levelData = levels[levelId];
    if (!levelData) {
      throw new Error(`can't initialize level ${levelId}`);
    } else {
      this.blocks = buildLevel(levelData);
    }

    this.interval = setInterval(() => {
      this.update();
      this.sendState();
    }, 1000 / 60);
  }

  update(): void {
    this.tanks.forEach((tank) => {
      tank.update();
    });
    this.bullets.forEach((bullet) => {
      bullet.update();
    });

    this.tanks.forEach((tank) => {
      if (tank.destroy) {
        this.removeTank(tank);
      }
    });
    this.bullets.forEach((bullet) => {
      if (bullet.destroy) {
        this.removeBullet(bullet);
      }
    });

    const now = Date.now();

    if (
      this.tanks.length - Object.keys(this.players).length < 4 &&
      now - this.lastEnemySpawnTime > ENEMY_RESPAWN_TIME
    ) {
      if (this.addEnemyTank()) {
        this.lastEnemySpawnTime = now;
      }
    }
  }

  getState(): ILevelState {
    return {
      levelId: 1,
      tanks: this.tanks.map((tank) => {
        const tankData: ITankData = {
          position: tank.pos,
        };
        return tankData;
      }),
      bullets: this.bullets.map((bullet) => {
        const bulletData: IBulletData = {
          position: bullet.pos,
        };
        return bulletData;
      }),
      blocks: this.blocks.map((block): IBlockData | null => {
        if (block) {
          const blockData: IBlockData = {
            type: block.type,
          };
          return blockData;
        }

        return null;
      }),
    };
  }

  removeBullet(bullet: Bullet): void {
    this.bullets.splice(this.bullets.indexOf(bullet), 1);
    bullet.tank.bullet = null;
    // this.explosions.push(new ExplosionSmall(bullet.center.x, bullet.center.y));
  }

  removeTank(tank: Tank): void {
    let socketId;
    for (const [key, playerTank] of Object.entries(this.players)) {
      if (playerTank === tank) {
        socketId = key;
      }
    }

    if (tank instanceof PlayerTank && socketId) {
      const newTank = new PlayerTank(
        tank.initialPos.x,
        tank.initialPos.y,
        this,
        DIR.UP
      );
      this.players[socketId] = newTank;
      this.tanks.splice(this.tanks.indexOf(tank), 1, newTank);
    } else {
      this.tanks.splice(this.tanks.indexOf(tank), 1);
    }
  }

  processCommand(data: ICommandData, socketId: string): void {
    switch (data.command) {
      case Command.PlayerMove:
        {
          const payload = data.payload as IMoveCommandPayload;

          this.players[socketId].moveInDirection(payload.dir);
        }
        break;
      case Command.PlayerShoot:
        {
          this.players[socketId].tryShoot();
        }
        break;
      default:
        console.error("unknown command", data.command);
    }
  }

  sendState(): void {
    this.io.to(this.id).emit("gameState", this.getState());
  }

  addEnemyTank(): boolean {
    const { x, y } = ENEMY_SPAWN_SPOTS[randomInt(0, ENEMY_SPAWN_SPOTS.length)];
    const body = new Body(x, y, TANK_SIZE, TANK_SIZE);

    let canPlace = true;

    for (const tank of this.tanks) {
      if (AABBIntersects(tank, body)) {
        canPlace = false;
      }
    }

    for (const bullet of this.bullets) {
      if (AABBIntersects(bullet, body)) {
        canPlace = false;
      }
    }

    if (canPlace) {
      this.tanks.push(new AITank(x, y, this, DIR.DOWN));

      return true;
    }

    return false;
  }

  addPlayer(socketId: string): void {
    const playersCount = Object.keys(this.players).length;
    const pos = PLAYER_SPAWN_SPOTS[playersCount];

    const tank = new PlayerTank(pos.x, pos.y, this, DIR.UP);

    this.players[socketId] = tank;
    this.tanks.push(tank);
  }

  removePlayer(socketId: string): void {
    const tank = this.players[socketId];
    this.removeTank(tank);
    delete this.players[socketId];
  }
}
