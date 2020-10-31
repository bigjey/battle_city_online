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
import { SPRITES } from "../preload";
import {
  snapValue,
  bodyInBounds,
  AABBIntersects,
  blocksinCluster,
} from "../utils";
import { Block } from "./Block";
import { Body } from "./Body";
import { Bullet } from "./Bullet";
import { gameManager } from "./GameManager";

export class Tank extends Body {
  dir = DIR.RIGHT;
  lastShot = 0;

  constructor(x: number, y: number) {
    super(x, y, TANK_WIDTH, TANK_HEIGHT);
  }

  update(): void {
    // movement
    const newPos: XY = {
      x: this.pos.x,
      y: this.pos.y,
    };
    let newDir: DIR = DIR.NONE;
    if (keysPressed[KEYS.LEFT]) {
      newPos.x -= MOVE_STEP;
      this.pos.y = newPos.y = snapValue(this.pos.y);
      newDir = DIR.LEFT;
    } else if (keysPressed[KEYS.RIGHT]) {
      newPos.x += MOVE_STEP;
      this.pos.y = newPos.y = snapValue(this.pos.y);
      newDir = DIR.RIGHT;
    } else if (keysPressed[KEYS.UP]) {
      newPos.y -= MOVE_STEP;
      this.pos.x = newPos.x = snapValue(this.pos.x);
      newDir = DIR.UP;
    } else if (keysPressed[KEYS.DOWN]) {
      newPos.y += MOVE_STEP;
      this.pos.x = newPos.x = snapValue(this.pos.x);
      newDir = DIR.DOWN;
    }
    if (newDir !== DIR.NONE) {
      this.dir = newDir;

      if (this.move(newPos)) {
        this.pos = newPos;
      }
    }

    // shooting
    if (
      (!this.lastShot || Date.now() - this.lastShot >= SHOOT_COLDOWN) &&
      keysPressed[KEYS.SHOOT]
    ) {
      this.shoot();
    }
  }

  render(): void {
    const x = this.pos.x + this.size.x / 2;
    const y = this.pos.y + this.size.y / 2;
    gameManager.ctx.save();
    gameManager.ctx.translate(x, y);
    gameManager.ctx.rotate((Math.PI / 2) * this.dir);
    gameManager.ctx.translate(-x, -y);
    gameManager.ctx.drawImage(
      SPRITES.player_1.img as CanvasImageSource,
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
        console.log("cant walk");
        return false;
      }
    }

    return true;
  }
  shoot(): void {
    gameManager.bullets.push(
      new Bullet(
        this.center.x - BULLET_SIZE / 2,
        this.center.y - BULLET_SIZE / 2,
        this.dir
      )
    );
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

    console.log(lCluster, rCluster);
    console.log(tCluster, bCluster);

    return items;
  }
}
