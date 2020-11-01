import { DIR, BULLET_SIZE, BULLET_SPEED, BLOCK_SIZE } from "../constants";
import { bodyIsVisible, blockIndexInBounds, AABBIntersects } from "../utils";

import { Body } from "./Body";
import { Block } from "./Block";
import { gameManager } from "./GameManager";
import { XY } from "..";
import { Tank } from "./Tank";
import { ExplosionBig } from "./Explosion";

export class Bullet extends Body {
  dir: DIR = DIR.NONE;
  tank: Tank;
  destroy = false;

  constructor(tank: Tank, x: number, y: number, dir: DIR) {
    super(x, y, BULLET_SIZE, BULLET_SIZE);

    this.dir = dir;
    this.tank = tank;
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
          gameManager.blocks[block.y][block.x] = null;
          hit = true;
        }
      }

      if (hit) {
        destroyBullet = true;
      }
    } else if (AABBIntersects(this, gameManager.base)) {
      if (!gameManager.base.isDestroyed) {
        gameManager.base.destroy();
        gameManager.explosions.push(
          new ExplosionBig(gameManager.base.center.x, gameManager.base.center.y)
        );

        destroyBullet = true;
      }
    } else {
      for (const tank of gameManager.tanks) {
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

      for (const bullet of gameManager.bullets) {
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
  render(): void {
    gameManager.ctx.fillStyle = "#ff7e1f";
    gameManager.ctx.fillRect(this.pos.x, this.pos.y, BULLET_SIZE, BULLET_SIZE);
  }
  hitBlocks(): Array<Block> {
    const items: Array<Block> = [];

    if (this.dir === DIR.NONE) {
      return items;
    }

    let pos1, pos2, pos3, pos4: XY;

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

    // first side of hit
    if (
      blockIndexInBounds(pos1.x, pos1.y) &&
      gameManager.blocks[pos1.y][pos1.x]
    ) {
      items.push(gameManager.blocks[pos1.y][pos1.x] as Block);
      // second block of first side
      if (
        blockIndexInBounds(pos3.x, pos3.y) &&
        gameManager.blocks[pos3.y][pos3.x]
      ) {
        items.push(gameManager.blocks[pos3.y][pos3.x] as Block);
      }
    }

    // second side of hit
    if (
      blockIndexInBounds(pos2.x, pos2.y) &&
      gameManager.blocks[pos2.y][pos2.x]
    ) {
      items.push(gameManager.blocks[pos2.y][pos2.x] as Block);
      // second block of second side
      if (
        blockIndexInBounds(pos4.x, pos4.y) &&
        gameManager.blocks[pos4.y][pos4.x]
      ) {
        items.push(gameManager.blocks[pos4.y][pos4.x] as Block);
      }
    }

    return items;
  }
}
