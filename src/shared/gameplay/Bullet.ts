import type { IXY } from "../../types";
import {
  BLOCKS_IN_ROW,
  BLOCK_SIZE,
  BULLET_SIZE,
  BULLET_SPEED,
  DIR,
} from "../../constants";
import { bodyIsVisible } from "../../utils/bodyIsVisible";
import { AABBIntersects } from "../../utils/collisions";
import { blockIndexInBounds } from "../../utils/level";
import type { Block } from "./Block";

import { Body } from "./Body";
import { Tank } from "./Tank";
import { GameRunner } from "../GameRunner";

export class Bullet extends Body {
  dir: DIR = DIR.NONE;
  tank: Tank;
  destroy = false;
  game: GameRunner;

  constructor(tank: Tank, x: number, y: number, game: GameRunner, dir: DIR) {
    super(x, y, BULLET_SIZE, BULLET_SIZE);

    this.dir = dir;
    this.tank = tank;
    this.game = game;
  }

  update(): void {
    let destroyBullet = false;

    switch (this.dir) {
      case DIR.LEFT:
        this.pos.x -= BULLET_SPEED;
        break;
      case DIR.UP:
        this.pos.y -= BULLET_SPEED;
        break;
      case DIR.RIGHT:
        this.pos.x += BULLET_SPEED;
        break;
      case DIR.DOWN:
        this.pos.y += BULLET_SPEED;
        break;
    }

    const b = this.hitBlocks();

    if (b.length) {
      let hit = false;
      for (const block of b) {
        if (block.isSolid) {
          hit = true;
        }
        if (block.isDamagable) {
          const index = block.y * BLOCKS_IN_ROW + block.x;
          this.game.blocks[index] = null;
          hit = true;
        }
      }
      if (hit) {
        destroyBullet = true;
      }
    } /* else if (false && AABBIntersects(this, this.game.base)) {
      if (!this.game.base.isDestroyed) {
        this.game.base.destroy();
        this.game.explosions.push(
          new ExplosionBig(this.game.base.center.x, this.game.base.center.y)
        );
        destroyBullet = true;
      }
    }  */ else {
      for (const tank of this.game.tanks) {
        if (tank === this.tank) {
          continue;
        }

        if (this.tank.ai === tank.ai) {
          continue;
        }

        if (AABBIntersects(tank, this)) {
          destroyBullet = true;
          tank.destroy = true;
        }
      }

      for (const bullet of this.game.bullets) {
        if (bullet.tank === this.tank) {
          continue;
        }

        if (bullet.tank.ai === this.tank.ai) {
          continue;
        }

        if (AABBIntersects(bullet, this)) {
          destroyBullet = true;
        }
      }
    }

    if (!bodyIsVisible(this)) {
      destroyBullet = true;
    }

    if (destroyBullet) {
      this.destroy = true;
    }
  }
  // render(): void {
  //   this.game.ctx.fillStyle = "#ff7e1f";
  //   this.game.ctx.fillRect(this.pos.x, this.pos.y, BULLET_SIZE, BULLET_SIZE);
  // }

  hitBlocks(): Block[] {
    const items: Block[] = [];

    if (this.dir === DIR.NONE) {
      return items;
    }

    let pos1, pos2, pos3, pos4: IXY;

    if (this.dir === DIR.LEFT || this.dir === DIR.RIGHT) {
      pos1 = {
        x: Math.floor(this.center.x / BLOCK_SIZE),
        y: Math.floor((this.center.y + BLOCK_SIZE * 0.5) / BLOCK_SIZE),
      };
      pos2 = {
        x: Math.floor(this.center.x / BLOCK_SIZE),
        y: Math.floor((this.center.y - BLOCK_SIZE * 0.5) / BLOCK_SIZE),
      };
      pos3 = {
        x: Math.floor(this.center.x / BLOCK_SIZE),
        y: Math.floor((this.center.y + BLOCK_SIZE * 1.5) / BLOCK_SIZE),
      };
      pos4 = {
        x: Math.floor(this.center.x / BLOCK_SIZE),
        y: Math.floor((this.center.y - BLOCK_SIZE * 1.5) / BLOCK_SIZE),
      };
    } else {
      pos1 = {
        x: Math.floor((this.center.x + BLOCK_SIZE * 0.5) / BLOCK_SIZE),
        y: Math.floor(this.center.y / BLOCK_SIZE),
      };
      pos2 = {
        x: Math.floor((this.center.x - BLOCK_SIZE * 0.5) / BLOCK_SIZE),
        y: Math.floor(this.center.y / BLOCK_SIZE),
      };
      pos3 = {
        x: Math.floor((this.center.x + BLOCK_SIZE * 1.5) / BLOCK_SIZE),
        y: Math.floor(this.center.y / BLOCK_SIZE),
      };
      pos4 = {
        x: Math.floor((this.center.x - BLOCK_SIZE * 1.5) / BLOCK_SIZE),
        y: Math.floor(this.center.y / BLOCK_SIZE),
      };
    }

    const i1 = pos1.y * BLOCKS_IN_ROW + pos1.x;
    const i2 = pos2.y * BLOCKS_IN_ROW + pos2.x;
    const i3 = pos3.y * BLOCKS_IN_ROW + pos3.x;
    const i4 = pos4.y * BLOCKS_IN_ROW + pos4.x;

    // first side of hit
    if (blockIndexInBounds(pos1.x, pos1.y) && this.game.blocks[i1]) {
      items.push(this.game.blocks[i1] as Block);
      // second block of first side
      if (blockIndexInBounds(pos3.x, pos3.y) && this.game.blocks[i3]) {
        items.push(this.game.blocks[i3] as Block);
      }
    }

    // second side of hit
    if (blockIndexInBounds(pos2.x, pos2.y) && this.game.blocks[i2]) {
      items.push(this.game.blocks[i2] as Block);
      // second block of second side
      if (blockIndexInBounds(pos4.x, pos4.y) && this.game.blocks[i4]) {
        items.push(this.game.blocks[i4] as Block);
      }
    }

    return items;
  }
}
