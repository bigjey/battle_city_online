import {
  BlockType,
  BLOCK_SIZE,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
} from "./constants";
import { Block } from "./gameplay/Block";
import { Body } from "./gameplay/Body";
import { gameManager } from "./gameplay/GameManager";
import { SPRITES } from "./preload";

const MOVEMENT_SNAP_VALUE = BLOCK_SIZE * 2;

export function AABBIntersects(A: Body, B: Body): boolean {
  return !(A.l >= B.r || B.l >= A.r || A.t >= B.b || B.t >= A.b);
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
