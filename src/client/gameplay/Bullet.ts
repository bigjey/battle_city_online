import { DIR, BULLET_SIZE, BULLET_SPEED, BLOCK_SIZE } from "../constants";
import { overlappingBlocks, bodyIsVisible, blockIndexInBounds } from "../utils";

import { Body } from "./Body";
import { Block } from "./Block";
import { gameManager } from "./GameManager";
import { XY } from "..";

export class Bullet extends Body {
  dir: DIR = DIR.NONE;

  constructor(x: number, y: number, dir: DIR) {
    super(x, y, BULLET_SIZE, BULLET_SIZE);

    this.dir = dir;
  }

  update(): void {
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
        gameManager.bullets.splice(gameManager.bullets.indexOf(this), 1);
      }
    }

    if (!bodyIsVisible(this)) {
      gameManager.bullets.splice(gameManager.bullets.indexOf(this), 1);
    }
  }
  render(): void {
    gameManager.ctx.fillStyle = "#fff";
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

    // for (let x = lPos; x < lPos + radius; x++) {
    //   for (let y = tPos; y < tPos + radius; y++) {
    //     if (!blockIndexInBounds(x, y)) {
    //       continue;
    //     }
    //     if (gameManager.blocks[y][x]) {
    //       items.push(gameManager.blocks[y][x] as Block);
    //     }
    //   }
    // }

    return items;
  }
}
