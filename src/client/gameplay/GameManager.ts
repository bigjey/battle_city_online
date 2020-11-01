import {
  BlockType,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
  DIR,
  GLOBAL_MODE,
} from "../constants";
import { buildCluster } from "../utils";
import { Base } from "./Base";
import { Block } from "./Block";
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
}

export class GameManager implements GameManager {
  mode = GLOBAL_MODE.DEBUG_TEST_LEVEL;
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

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.base = new Base(192, 386);

    this.restoreDebugLevelData();
    this.buildDebugLevel();
  }

  setMode(mode: GLOBAL_MODE): void {
    this.mode = mode;

    switch (this.mode) {
      case GLOBAL_MODE.DEBUG_TEST_LEVEL:
        this.buildDebugLevel();
        this.tanks = [];
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
}

const instance = new GameManager(canvas);

window.gameManager = instance;

export { instance as gameManager };
