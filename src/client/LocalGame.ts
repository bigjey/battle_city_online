import type {
  IBlockData,
  IBulletData,
  ILevelState,
  ILocalGame,
  ITankData,
} from "../types";
import { AITank } from "../shared/gameplay//AITank";
import { PlayerTank } from "../shared/gameplay//PlayerTank";
import { Tank } from "../shared/gameplay/Tank";
import { Bullet } from "../shared/gameplay/Bullet";
import { keysPressed } from "./keyboard";
import { BlockType, DIR, KEYS } from "../constants";
import type { Block } from "../shared/gameplay/Block";
import { levels } from "../shared/levels";
import { buildLevel } from "../utils/level";

export class LocalGame implements ILocalGame {
  playerTank: PlayerTank;
  tanks: Tank[];
  bullets: Bullet[];
  levelId: number;
  blocks: (Block | null)[];

  constructor(levelId: number) {
    this.tanks = [];
    this.bullets = [];
    this.playerTank = new PlayerTank(128, 384, this, DIR.UP);
    this.tanks.push(new AITank(0, 0, this, DIR.DOWN));
    this.tanks.push(new AITank(192, 0, this, DIR.DOWN));
    this.tanks.push(new AITank(382, 0, this, DIR.DOWN));
    this.tanks.push(this.playerTank);

    this.levelId = levelId;

    const levelData = levels[levelId];
    if (!levelData) {
      throw new Error(`can't initialize level ${levelId}`);
    } else {
      this.blocks = buildLevel(levelData);
    }
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
    this.tanks.splice(this.tanks.indexOf(tank), 1);
    // this.explosions.push(new ExplosionBig(tank.center.x, tank.center.y));

    if (tank instanceof PlayerTank) {
      this.playerTank = new PlayerTank(128, 386, this, DIR.UP);
      this.tanks.push(this.playerTank);
    }
  }

  handleInput(): void {
    if (keysPressed[KEYS.LEFT]) {
      this.playerTank.moveInDirection(DIR.LEFT);
    } else if (keysPressed[KEYS.RIGHT]) {
      this.playerTank.moveInDirection(DIR.RIGHT);
    } else if (keysPressed[KEYS.UP]) {
      this.playerTank.moveInDirection(DIR.UP);
    } else if (keysPressed[KEYS.DOWN]) {
      this.playerTank.moveInDirection(DIR.DOWN);
    }

    if (keysPressed[KEYS.SHOOT]) {
      this.playerTank.tryShoot();
    }
  }
}
