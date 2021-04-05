import { IScene } from "..";
import {
  BlockType,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
  DIR,
  GLOBAL_MODE,
  TANK_HEIGHT,
  TANK_WIDTH,
} from "../constants";
import mainMenuSceneInstance from "../Scenes/MainMenuScene";
import {
  AABBIntersects,
  buildCluster,
  eventEmitter,
  randomInt,
} from "../utils";
import { AITank } from "./AITank";
import { Base } from "./Base";
import { Block } from "./Block";
import { Body } from "./Body";
import { Bullet } from "./Bullet";
import { Explosion, ExplosionBig, ExplosionSmall } from "./Explosion";
import { PlayerTank } from "./PlayerTank";
import { Tank } from "./Tank";

const canvas = document.createElement("canvas");

document.body.appendChild(canvas);

canvas.width = CANVAS_WIDTH;
canvas.height = CANVAS_HEIGHT;

export interface GameManager {
  mode: GLOBAL_MODE;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player1: Tank | null;
  tanks: Tank[];
  blocks: Array<Array<Block | null>>;
  bullets: Bullet[];
  explosions: Explosion[];
  debugLevel: Array<Array<BlockType | null>>;
  base: Base;
  currentScene: IScene | null;
}

const RESPAWN_SPOTS: number[][] = [
  [0, 0],
  [190, 0],
  [386, 0],
];

export class GameManager implements GameManager {
  mode = GLOBAL_MODE.NORMAL_GAME;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player1: Tank | null = null;
  tanks: Tank[] = [];
  blocks: Array<Array<Block | null>> = new Array(52)
    .fill(null)
    .map(() => new Array(52).fill(null));
  bullets: Bullet[] = [];
  explosions: Explosion[] = [];
  debugLevel: Array<Array<BlockType | null>> = [];
  base: Base;
  currentScene: IScene | null = null;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.base = new Base(192, 382);

    this.buildDebugLevel();

    this.onWindowResize();

    window.addEventListener("resize", this.onWindowResize.bind(this));

    this.setMode(GLOBAL_MODE.NORMAL_GAME);
  }

  onWindowResize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    this.canvas.width = w;
    this.canvas.height = h;
  }

  setMode(mode: GLOBAL_MODE): void {
    this.mode = mode;

    eventEmitter.emit("set-game-mode", mode);

    switch (this.mode) {
      case GLOBAL_MODE.NORMAL_GAME:
        this.currentScene = mainMenuSceneInstance;
        break;

      case GLOBAL_MODE.DEBUG_TEST_LEVEL:
        this.buildDebugLevel();
        this.tanks = [];
        this.bullets = [];
        this.tanks.push(new PlayerTank(128, 386, DIR.UP));

        break;
    }
  }

  removeBullet(bullet: Bullet): void {
    this.bullets.splice(this.bullets.indexOf(bullet), 1);
    bullet.tank.bullet = null;
    this.explosions.push(new ExplosionSmall(bullet.center.x, bullet.center.y));
  }

  removeExplosion(explosion: Explosion): void {
    this.explosions.splice(this.explosions.indexOf(explosion), 1);
  }

  removeTank(tank: Tank): void {
    this.tanks.splice(this.tanks.indexOf(tank), 1);
    this.explosions.push(new ExplosionBig(tank.center.x, tank.center.y));

    if (tank instanceof PlayerTank) {
      this.tanks.push(new PlayerTank(128, 386, DIR.UP));
    }
  }

  resetDebugLevel(): void {
    this.debugLevel = new Array(52 / CLUSTER_SIZE)
      .fill(null)
      .map(() => new Array(52 / CLUSTER_SIZE).fill(null));
    this.saveDebugLevel();
  }

  saveDebugLevel(): void {
    localStorage.setItem("debugLevel", JSON.stringify(this.debugLevel));
  }

  restoreDebugLevelData(): void {
    const data = localStorage.getItem("debugLevel");
    if (data) {
      try {
        this.debugLevel = JSON.parse(data);
      } catch (e) {
        //
      }
    }

    if (!this.debugLevel.length) {
      this.debugLevel = new Array(52 / CLUSTER_SIZE)
        .fill(null)
        .map(() => new Array(52 / CLUSTER_SIZE).fill(null));
    }
  }
  buildDebugLevel(): void {
    for (const [clusterY, row] of this.debugLevel.entries()) {
      for (const [clusterX, type] of row.entries()) {
        if (type !== null) {
          buildCluster(this, type, clusterX, clusterY);
        }
      }
    }
  }

  addEnemyTank(): boolean {
    const [x, y] = RESPAWN_SPOTS[randomInt(0, RESPAWN_SPOTS.length)];
    const body = new Body(x, y, TANK_WIDTH, TANK_HEIGHT);

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
      this.tanks.push(new AITank(x, y, DIR.DOWN));

      return true;
    }

    return false;
  }
}

const instance = new GameManager(canvas);

window.gameManager = instance;

export { instance as gameManager };
