import { ICellData, ILevel } from "../types";
import { Block } from "../shared/gameplay/Block";
import {
  BLOCKS_IN_ROW,
  BlockType,
  CLUSTERS_IN_ROW,
  CLUSTER_SIZE,
} from "../constants";

export function buildLevel(levelData: ILevel): (Block | null)[] {
  // const clusters = new Array(CLUSTERS_IN_ROW * CLUSTERS_IN_ROW).fill(null);

  const blocks: (Block | null)[] = new Array(
    BLOCKS_IN_ROW * BLOCKS_IN_ROW
  ).fill(null);

  levelData.data.forEach((cellData: ICellData) => {
    const { x, y, value } = cellData;
    buildCluster(blocks, value, x, y);
  });

  // for (let clusterY = 0; clusterY < CLUSTERS_IN_ROW; clusterY++) {
  //   for (let clusterX = 0; clusterX < CLUSTERS_IN_ROW; clusterX++) {
  //     const index = clusterY * CLUSTERS_IN_ROW + clusterX;
  //     const type = clusters[index];
  //     if (type) {
  //       buildCluster(blocks, type, clusterX, clusterY);
  //     }
  //   }
  // }

  return blocks;
}

export function buildCluster(
  blocks: (Block | null)[],
  blockType: BlockType,
  clusterX: number,
  clusterY: number
): void {
  // console.log("building cluster", clusterX, clusterY, blockType);
  for (let yOffset = 0; yOffset < CLUSTER_SIZE; yOffset++) {
    for (let xOffset = 0; xOffset < CLUSTER_SIZE; xOffset++) {
      const x = clusterX * CLUSTER_SIZE + xOffset;
      const y = clusterY * CLUSTER_SIZE + yOffset;
      const index = y * BLOCKS_IN_ROW + x;
      blocks[index] = new Block(x, y, blockType);
    }
  }
}

export function blocksInCluster(
  blocks: Block[],
  clusterX: number,
  clusterY: number
): Block[] {
  const items: Block[] = [];

  for (let yOffset = 0; yOffset < CLUSTER_SIZE; yOffset++) {
    for (let xOffset = 0; xOffset < CLUSTER_SIZE; xOffset++) {
      const blockX = clusterX * CLUSTER_SIZE + xOffset;
      const blockY = clusterY * CLUSTER_SIZE + yOffset;
      const blockIndex = blockY * BLOCKS_IN_ROW + blockX;
      const block = blocks[blockIndex];
      if (block) {
        items.push(block);
      }
    }
  }

  return items;
}

export function blockIndexInBounds(x: number, y: number): boolean {
  return x >= 0 && x < BLOCKS_IN_ROW && y >= 0 && y < BLOCKS_IN_ROW;
}
