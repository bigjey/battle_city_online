import {
  BlockType,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
  GLOBAL_MODE,
} from "../constants";
import { buildCluster } from "../utils";
import { Block } from "./Block";
import { Bullet } from "./Bullet";
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
  blocks: Array<Array<Block | null>>;
  bullets: Bullet[];
  debugLevel: Array<Array<BlockType | null>>;
}

export class GameManager implements GameManager {
  mode = GLOBAL_MODE.EDIT_TEST_LEVEL;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  player1: Tank | null = null;
  blocks: Array<Array<Block | null>> = [];
  bullets: Bullet[] = [];
  debugLevel: Array<Array<BlockType | null>> = [];

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

    this.restoreDebugLevelData();
  }

  setMode(mode: GLOBAL_MODE): void {
    this.mode = mode;

    switch (this.mode) {
      case GLOBAL_MODE.DEBUG_TEST_LEVEL:
        this.buildDebugLevel();
        this.player1 = new Tank(0, 0);
        break;
    }
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
          buildCluster(type, clusterX, clusterY);
        }
      }
    }
  }
}

const instance = new GameManager(canvas);

window.gameManager = instance;

export { instance as gameManager };
