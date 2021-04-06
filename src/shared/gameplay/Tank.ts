import { GameRunner } from "../GameRunner";
import {
  BLOCK_SIZE,
  BULLET_SIZE,
  CLUSTER_SIZE,
  DIR,
  TANK_SIZE,
} from "../../constants";
import type { IXY } from "../../types";
import bodyInBounds from "../../utils/bodyInBounds";
import { AABBIntersects } from "../../utils/collisions";
import { blocksInCluster } from "../../utils/level";
import type { Block } from "./Block";
import { Body } from "./Body";
import { Bullet } from "./Bullet";

export class Tank extends Body {
  lastShot = 0;
  // sprite: Sprite;
  dir: DIR;
  bullet: Bullet | null = null;
  destroy = false;
  ai = false;

  game: GameRunner;

  initialPos: IXY;
  initialDir: DIR;

  constructor({
    x,
    y,
    game,
    dir = DIR.RIGHT /* , sprite: Sprite */,
  }: {
    x: number;
    y: number;
    game: GameRunner;
    dir?: DIR;
  }) {
    super(x, y, TANK_SIZE, TANK_SIZE);

    this.game = game;

    this.dir = dir;
    // this.sprite = sprite;

    this.initialPos = {
      x,
      y,
    };
    this.initialDir = dir;
  }

  setDir(dir: DIR): void {
    this.dir = dir;
  }

  update(): void {
    //
  }

  // render(): void {
  //   if (!this.sprite || !this.sprite.img) {
  //     return;
  //   }

  //   const x = this.pos.x + this.size.x / 2;
  //   const y = this.pos.y + this.size.y / 2;
  //   gameManager.ctx.save();
  //   gameManager.ctx.translate(x, y);
  //   gameManager.ctx.rotate((Math.PI / 2) * this.dir);
  //   gameManager.ctx.translate(-x, -y);
  //   gameManager.ctx.drawImage(
  //     this.sprite.img as CanvasImageSource,
  //     this.pos.x,
  //     this.pos.y
  //   );
  //   gameManager.ctx.restore();
  // }

  move(newPos: IXY): boolean {
    const newBody = new Body(newPos.x, newPos.y, TANK_SIZE, TANK_SIZE);

    if (!bodyInBounds(newBody)) {
      return false;
    }

    const blocks = this.overlappingBlocks(newBody);

    for (const block of blocks) {
      if (!block.isWalkable) {
        return false;
      }
    }

    for (const tank of this.game.tanks) {
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
      this.game,
      this.dir
    );
    this.bullet = bullet;
    this.game.bullets.push(bullet);
    this.lastShot = Date.now();
  }

  overlappingBlocks(body: Body): Block[] {
    const items: Block[] = [];
    const res = BLOCK_SIZE * CLUSTER_SIZE;

    const lCluster = Math.floor(body.l / res);
    const rCluster = Math.ceil(body.r / res);
    const tCluster = Math.floor(body.t / res);
    const bCluster = Math.ceil(body.b / res);

    if (this.game?.blocks) {
      for (let clusterY = tCluster; clusterY < bCluster; clusterY++) {
        for (let clusterX = lCluster; clusterX < rCluster; clusterX++) {
          for (const block of blocksInCluster(
            this.game.blocks,
            clusterX,
            clusterY
          )) {
            items.push(block);
          }
        }
      }
    }

    return items;
  }

  resetPosition(): void {
    this.pos.x = this.initialPos.x;
    this.pos.y = this.initialPos.y;
    this.dir = this.initialDir;
  }
}
