import {
  BlockType,
  BLOCK_SIZE,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
} from "./constants";
import { Block } from "./gameplay/Block";
import { Body } from "./gameplay/Body";
import { GameManager, gameManager } from "./gameplay/GameManager";
import { SPRITES } from "./preload";

const MOVEMENT_SNAP_VALUE = BLOCK_SIZE * 2;

export function AABBIntersects(A: Body, B: Body): boolean {
  // const dx = A.pos.x - B.pos.x;
  // const px = A.size.x / 2 + B.size.x / 2 - Math.abs(dx);
  // if (px <= 0) {
  //   return false;
  // }

  // const dy = A.pos.y - B.pos.y;
  // const py = A.size.y / 2 + B.size.y / 2 - Math.abs(dy);
  // if (py <= 0) {
  //   return false;
  // }

  // return true;

  return !(A.r <= B.l || A.l >= B.r || A.t >= B.b || A.b <= B.t);
}

export function snapValue(value: number): number {
  const snapped = Math.round(value / MOVEMENT_SNAP_VALUE);
  return snapped * MOVEMENT_SNAP_VALUE;
}

export function blockIndexInBounds(x: number, y: number): boolean {
  return x >= 0 && x < 52 && y >= 0 && y < 52;
}

export function bodyInBounds(body: Body): boolean {
  return (
    body.l >= 0 &&
    body.t >= 0 &&
    body.b <= CANVAS_HEIGHT &&
    body.r <= CANVAS_WIDTH
  );
}

export function bodyIsVisible(body: Body): boolean {
  return (
    body.l < CANVAS_WIDTH && body.r > 0 && body.t < CANVAS_HEIGHT && body.b > 0
  );
}

export function renderBlock(
  type: BlockType,
  blockX: number,
  blockY: number
): void {
  const spriteIndex = (blockY % 2) * 2 + (blockX % 2);

  switch (type) {
    case BlockType.Brick:
      gameManager.ctx.drawImage(
        SPRITES[`brick_${spriteIndex + 1}`].img as CanvasImageSource,
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE
      );
      break;
    case BlockType.Steel:
      gameManager.ctx.drawImage(
        SPRITES[`stone_${spriteIndex + 1}`].img as CanvasImageSource,
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE
      );
      break;
    case BlockType.Tree:
      gameManager.ctx.drawImage(
        SPRITES[`tree_${spriteIndex + 1}`].img as CanvasImageSource,
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE
      );
      break;
    case BlockType.Water:
      gameManager.ctx.drawImage(
        SPRITES[`water_${spriteIndex + 1}`].img as CanvasImageSource,
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE
      );
      break;
    default:
      gameManager.ctx.fillStyle = "pink";
      gameManager.ctx.fillRect(
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );
  }
}

export function renderCluster(
  type: BlockType,
  clusterX: number,
  clusterY: number
): void {
  const blockX = clusterX * CLUSTER_SIZE;
  const blockY = clusterY * CLUSTER_SIZE;

  for (let dy = 0; dy < CLUSTER_SIZE; dy++) {
    for (let dx = 0; dx < CLUSTER_SIZE; dx++) {
      renderBlock(type, blockX + dx, blockY + dy);
    }
  }
}

export function buildCluster(
  gameManager: GameManager,
  blockType: BlockType,
  clusterX: number,
  clusterY: number
): void {
  for (let yOffset = 0; yOffset < CLUSTER_SIZE; yOffset++) {
    for (let xOffset = 0; xOffset < CLUSTER_SIZE; xOffset++) {
      const blockX = clusterX * CLUSTER_SIZE + xOffset;
      const blockY = clusterY * CLUSTER_SIZE + yOffset;

      gameManager.blocks[blockY][blockX] = new Block(blockX, blockY, blockType);
    }
  }
}

export function blocksinCluster(clusterX: number, clusterY: number): Block[] {
  const items: Block[] = [];

  for (let yOffset = 0; yOffset < CLUSTER_SIZE; yOffset++) {
    for (let xOffset = 0; xOffset < CLUSTER_SIZE; xOffset++) {
      const blockX = clusterX * CLUSTER_SIZE + xOffset;
      const blockY = clusterY * CLUSTER_SIZE + yOffset;

      const block = gameManager.blocks[blockY][blockX];

      if (block) {
        items.push(block);
      }
    }
  }

  return items;
}

export function randomInt(
  min = 0,
  max: number = Number.MAX_SAFE_INTEGER
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

class EventEmitter {
  events: {
    [eventName: string]: Array<(v: any) => void>;
  } = {};

  on(eventName: string, callback: (v: any) => void): () => void {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);

    return () => {
      this.events[eventName].splice(this.events[eventName].indexOf(callback));
    };
  }

  emit(eventName: string, value: any): void {
    this.events[eventName].forEach((callback) => {
      callback(value);
    });
  }
}

export const eventEmitter = new EventEmitter();
