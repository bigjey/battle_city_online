import { XY } from "..";
import {
  BLOCK_SIZE,
  BULLET_SIZE,
  CLUSTER_SIZE,
  DIR,
  KEYS,
  MOVE_STEP,
  SHOOT_COLDOWN,
  TANK_HEIGHT,
  TANK_WIDTH,
} from "../constants";
import { keysPressed } from "../keyboard";
import { Sprite, SPRITES } from "../preload";
import {
  snapValue,
  bodyInBounds,
  blocksinCluster,
  AABBIntersects,
} from "../utils";
import { Block } from "./Block";
import { Body } from "./Body";
import { Bullet } from "./Bullet";
import { gameManager } from "./GameManager";

export class Tank extends Body {
  lastShot = 0;
  sprite: Sprite;
  dir: DIR;
  bullet: Bullet | null = null;
  destroy = false;
  ai = false;

  constructor(x: number, y: number, dir: DIR = DIR.RIGHT, sprite: Sprite) {
    super(x, y, TANK_WIDTH, TANK_HEIGHT);

    this.dir = dir;
    this.sprite = sprite;
  }

  setDir(dir: DIR): void {
    this.dir = dir;
  }

  update(): void {
    //
  }

  render(): void {
    if (!this.sprite || !this.sprite.img) {
      return;
    }

    const x = this.pos.x + this.size.x / 2;
    const y = this.pos.y + this.size.y / 2;
    gameManager.ctx.save();
    gameManager.ctx.translate(x, y);
    gameManager.ctx.rotate((Math.PI / 2) * this.dir);
    gameManager.ctx.translate(-x, -y);
    gameManager.ctx.drawImage(
      this.sprite.img as CanvasImageSource,
      this.pos.x,
      this.pos.y
    );
    gameManager.ctx.restore();
  }
  move(newPos: XY): boolean {
    const newBody = new Body(newPos.x, newPos.y, TANK_WIDTH, TANK_WIDTH);
    if (!bodyInBounds(newBody)) {
      return false;
    }

    const blocks = this.overlappingBlocks(newBody);

    for (const block of blocks) {
      if (!block.isWalkable) {
        return false;
      }
    }

    for (const tank of gameManager.tanks) {
      if (tank !== this && AABBIntersects(tank, newBody)) {
        return false;
      }
    }

    return true;
  }
  shoot(): void {
    const bullet = new Bullet(
      this,
      this.center.x - BULLET_SIZE / 2,
      this.center.y - BULLET_SIZE / 2,
      this.dir
    );
    this.bullet = bullet;
    gameManager.bullets.push(bullet);
    this.lastShot = Date.now();
  }
  overlappingBlocks(body: Body): Block[] {
    const items: Block[] = [];
    const res = BLOCK_SIZE * CLUSTER_SIZE;

    const lCluster = Math.floor(body.l / res);
    const rCluster = Math.ceil(body.r / res);
    const tCluster = Math.floor(body.t / res);
    const bCluster = Math.ceil(body.b / res);

    for (let clusterY = tCluster; clusterY < bCluster; clusterY++) {
      for (let clusterX = lCluster; clusterX < rCluster; clusterX++) {
        for (const block of blocksinCluster(clusterX, clusterY)) {
          items.push(block);
        }
      }
    }

    return items;
  }
}
