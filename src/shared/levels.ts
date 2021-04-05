import { BlockType } from "../constants";
import type { ILevel } from "../types";

export const levels: Record<number, ILevel> = {
  1: {
    name: "1",
    order: -1,
    data: [
      // 1
      { x: 2, y: 2, value: BlockType.Brick },
      { x: 3, y: 2, value: BlockType.Brick },
      { x: 2, y: 3, value: BlockType.Brick },
      { x: 3, y: 3, value: BlockType.Brick },

      { x: 2, y: 4, value: BlockType.Brick },
      { x: 3, y: 4, value: BlockType.Brick },
      { x: 2, y: 5, value: BlockType.Brick },
      { x: 3, y: 5, value: BlockType.Brick },

      { x: 2, y: 6, value: BlockType.Brick },
      { x: 3, y: 6, value: BlockType.Brick },
      { x: 2, y: 7, value: BlockType.Brick },
      { x: 3, y: 7, value: BlockType.Brick },

      { x: 2, y: 8, value: BlockType.Brick },
      { x: 3, y: 8, value: BlockType.Brick },
      { x: 2, y: 9, value: BlockType.Brick },
      { x: 3, y: 9, value: BlockType.Brick },

      { x: 2, y: 10, value: BlockType.Brick },
      { x: 3, y: 10, value: BlockType.Brick },
      { x: 2, y: 11, value: BlockType.Brick },
      { x: 3, y: 11, value: BlockType.Brick },

      // 2
      { x: 6, y: 2, value: BlockType.Brick },
      { x: 7, y: 2, value: BlockType.Brick },
      { x: 6, y: 3, value: BlockType.Brick },
      { x: 7, y: 3, value: BlockType.Brick },

      { x: 6, y: 4, value: BlockType.Brick },
      { x: 7, y: 4, value: BlockType.Brick },
      { x: 6, y: 5, value: BlockType.Brick },
      { x: 7, y: 5, value: BlockType.Brick },

      { x: 6, y: 6, value: BlockType.Brick },
      { x: 7, y: 6, value: BlockType.Brick },
      { x: 6, y: 7, value: BlockType.Brick },
      { x: 7, y: 7, value: BlockType.Brick },

      { x: 6, y: 8, value: BlockType.Brick },
      { x: 7, y: 8, value: BlockType.Brick },
      { x: 6, y: 9, value: BlockType.Brick },
      { x: 7, y: 9, value: BlockType.Brick },

      { x: 6, y: 10, value: BlockType.Brick },
      { x: 7, y: 10, value: BlockType.Brick },
      { x: 6, y: 11, value: BlockType.Brick },
      { x: 7, y: 11, value: BlockType.Brick },

      // 3
      { x: 10, y: 2, value: BlockType.Brick },
      { x: 11, y: 2, value: BlockType.Brick },
      { x: 10, y: 3, value: BlockType.Brick },
      { x: 11, y: 3, value: BlockType.Brick },

      { x: 10, y: 4, value: BlockType.Brick },
      { x: 11, y: 4, value: BlockType.Brick },
      { x: 10, y: 5, value: BlockType.Brick },
      { x: 11, y: 5, value: BlockType.Brick },

      { x: 10, y: 6, value: BlockType.Brick },
      { x: 11, y: 6, value: BlockType.Brick },
      { x: 10, y: 7, value: BlockType.Brick },
      { x: 11, y: 7, value: BlockType.Brick },

      { x: 10, y: 8, value: BlockType.Brick },
      { x: 11, y: 8, value: BlockType.Brick },
      { x: 10, y: 9, value: BlockType.Brick },
      { x: 11, y: 9, value: BlockType.Brick },

      // 4
      { x: 14, y: 2, value: BlockType.Brick },
      { x: 15, y: 2, value: BlockType.Brick },
      { x: 14, y: 3, value: BlockType.Brick },
      { x: 15, y: 3, value: BlockType.Brick },

      { x: 14, y: 4, value: BlockType.Brick },
      { x: 15, y: 4, value: BlockType.Brick },
      { x: 14, y: 5, value: BlockType.Brick },
      { x: 15, y: 5, value: BlockType.Brick },

      { x: 14, y: 6, value: BlockType.Brick },
      { x: 15, y: 6, value: BlockType.Brick },
      { x: 14, y: 7, value: BlockType.Brick },
      { x: 15, y: 7, value: BlockType.Brick },

      { x: 14, y: 8, value: BlockType.Brick },
      { x: 15, y: 8, value: BlockType.Brick },
      { x: 14, y: 9, value: BlockType.Brick },
      { x: 15, y: 9, value: BlockType.Brick },

      // 5
      { x: 18, y: 2, value: BlockType.Brick },
      { x: 19, y: 2, value: BlockType.Brick },
      { x: 18, y: 3, value: BlockType.Brick },
      { x: 19, y: 3, value: BlockType.Brick },

      { x: 18, y: 4, value: BlockType.Brick },
      { x: 19, y: 4, value: BlockType.Brick },
      { x: 18, y: 5, value: BlockType.Brick },
      { x: 19, y: 5, value: BlockType.Brick },

      { x: 18, y: 6, value: BlockType.Brick },
      { x: 19, y: 6, value: BlockType.Brick },
      { x: 18, y: 7, value: BlockType.Brick },
      { x: 19, y: 7, value: BlockType.Brick },

      { x: 18, y: 8, value: BlockType.Brick },
      { x: 19, y: 8, value: BlockType.Brick },
      { x: 18, y: 9, value: BlockType.Brick },
      { x: 19, y: 9, value: BlockType.Brick },

      { x: 18, y: 10, value: BlockType.Brick },
      { x: 19, y: 10, value: BlockType.Brick },
      { x: 18, y: 11, value: BlockType.Brick },
      { x: 19, y: 11, value: BlockType.Brick },

      // 6
      { x: 22, y: 2, value: BlockType.Brick },
      { x: 23, y: 2, value: BlockType.Brick },
      { x: 22, y: 3, value: BlockType.Brick },
      { x: 23, y: 3, value: BlockType.Brick },

      { x: 22, y: 4, value: BlockType.Brick },
      { x: 23, y: 4, value: BlockType.Brick },
      { x: 22, y: 5, value: BlockType.Brick },
      { x: 23, y: 5, value: BlockType.Brick },

      { x: 22, y: 6, value: BlockType.Brick },
      { x: 23, y: 6, value: BlockType.Brick },
      { x: 22, y: 7, value: BlockType.Brick },
      { x: 23, y: 7, value: BlockType.Brick },

      { x: 22, y: 8, value: BlockType.Brick },
      { x: 23, y: 8, value: BlockType.Brick },
      { x: 22, y: 9, value: BlockType.Brick },
      { x: 23, y: 9, value: BlockType.Brick },

      { x: 22, y: 10, value: BlockType.Brick },
      { x: 23, y: 10, value: BlockType.Brick },
      { x: 22, y: 11, value: BlockType.Brick },
      { x: 23, y: 11, value: BlockType.Brick },

      // 7
      { x: 12, y: 6, value: BlockType.Steel },
      { x: 13, y: 6, value: BlockType.Steel },
      { x: 12, y: 7, value: BlockType.Steel },
      { x: 13, y: 7, value: BlockType.Steel },

      //  8
      { x: 10, y: 12, value: BlockType.Brick },
      { x: 11, y: 12, value: BlockType.Brick },
      { x: 10, y: 13, value: BlockType.Brick },
      { x: 11, y: 13, value: BlockType.Brick },

      //  9
      { x: 14, y: 12, value: BlockType.Brick },
      { x: 15, y: 12, value: BlockType.Brick },
      { x: 14, y: 13, value: BlockType.Brick },
      { x: 15, y: 13, value: BlockType.Brick },

      // 10
      { x: 0, y: 14, value: BlockType.Brick },
      { x: 1, y: 14, value: BlockType.Brick },

      // 11
      { x: 0, y: 15, value: BlockType.Steel },
      { x: 1, y: 15, value: BlockType.Steel },

      // 12
      { x: 4, y: 14, value: BlockType.Brick },
      { x: 5, y: 14, value: BlockType.Brick },
      { x: 4, y: 15, value: BlockType.Brick },
      { x: 5, y: 15, value: BlockType.Brick },

      { x: 6, y: 14, value: BlockType.Brick },
      { x: 7, y: 14, value: BlockType.Brick },
      { x: 6, y: 15, value: BlockType.Brick },
      { x: 7, y: 15, value: BlockType.Brick },

      // 13
      { x: 18, y: 14, value: BlockType.Brick },
      { x: 19, y: 14, value: BlockType.Brick },
      { x: 18, y: 15, value: BlockType.Brick },
      { x: 19, y: 15, value: BlockType.Brick },

      { x: 20, y: 14, value: BlockType.Brick },
      { x: 21, y: 14, value: BlockType.Brick },
      { x: 20, y: 15, value: BlockType.Brick },
      { x: 21, y: 15, value: BlockType.Brick },

      // 14
      { x: 24, y: 14, value: BlockType.Brick },
      { x: 25, y: 14, value: BlockType.Brick },

      // 15
      { x: 24, y: 15, value: BlockType.Steel },
      { x: 25, y: 15, value: BlockType.Steel },

      // 16
      { x: 2, y: 18, value: BlockType.Brick },
      { x: 3, y: 18, value: BlockType.Brick },
      { x: 2, y: 19, value: BlockType.Brick },
      { x: 3, y: 19, value: BlockType.Brick },

      { x: 2, y: 20, value: BlockType.Brick },
      { x: 3, y: 20, value: BlockType.Brick },
      { x: 2, y: 21, value: BlockType.Brick },
      { x: 3, y: 21, value: BlockType.Brick },

      { x: 2, y: 22, value: BlockType.Brick },
      { x: 3, y: 22, value: BlockType.Brick },
      { x: 2, y: 23, value: BlockType.Brick },
      { x: 3, y: 23, value: BlockType.Brick },

      // 17
      { x: 6, y: 18, value: BlockType.Brick },
      { x: 7, y: 18, value: BlockType.Brick },
      { x: 6, y: 19, value: BlockType.Brick },
      { x: 7, y: 19, value: BlockType.Brick },

      { x: 6, y: 20, value: BlockType.Brick },
      { x: 7, y: 20, value: BlockType.Brick },
      { x: 6, y: 21, value: BlockType.Brick },
      { x: 7, y: 21, value: BlockType.Brick },

      { x: 6, y: 22, value: BlockType.Brick },
      { x: 7, y: 22, value: BlockType.Brick },
      { x: 6, y: 23, value: BlockType.Brick },
      { x: 7, y: 23, value: BlockType.Brick },

      // 18
      { x: 10, y: 16, value: BlockType.Brick },
      { x: 11, y: 16, value: BlockType.Brick },
      { x: 10, y: 17, value: BlockType.Brick },
      { x: 11, y: 17, value: BlockType.Brick },

      { x: 10, y: 18, value: BlockType.Brick },
      { x: 11, y: 18, value: BlockType.Brick },
      { x: 10, y: 19, value: BlockType.Brick },
      { x: 11, y: 19, value: BlockType.Brick },

      { x: 10, y: 20, value: BlockType.Brick },
      { x: 11, y: 20, value: BlockType.Brick },

      // 19
      { x: 14, y: 16, value: BlockType.Brick },
      { x: 15, y: 16, value: BlockType.Brick },
      { x: 14, y: 17, value: BlockType.Brick },
      { x: 15, y: 17, value: BlockType.Brick },

      { x: 14, y: 18, value: BlockType.Brick },
      { x: 15, y: 18, value: BlockType.Brick },
      { x: 14, y: 19, value: BlockType.Brick },
      { x: 15, y: 19, value: BlockType.Brick },

      { x: 14, y: 20, value: BlockType.Brick },
      { x: 15, y: 20, value: BlockType.Brick },

      // 20
      { x: 18, y: 18, value: BlockType.Brick },
      { x: 19, y: 18, value: BlockType.Brick },
      { x: 18, y: 19, value: BlockType.Brick },
      { x: 19, y: 19, value: BlockType.Brick },

      { x: 18, y: 20, value: BlockType.Brick },
      { x: 19, y: 20, value: BlockType.Brick },
      { x: 18, y: 21, value: BlockType.Brick },
      { x: 19, y: 21, value: BlockType.Brick },

      { x: 18, y: 22, value: BlockType.Brick },
      { x: 19, y: 22, value: BlockType.Brick },
      { x: 18, y: 23, value: BlockType.Brick },
      { x: 19, y: 23, value: BlockType.Brick },

      // 21
      { x: 22, y: 18, value: BlockType.Brick },
      { x: 23, y: 18, value: BlockType.Brick },
      { x: 22, y: 19, value: BlockType.Brick },
      { x: 23, y: 19, value: BlockType.Brick },

      { x: 22, y: 20, value: BlockType.Brick },
      { x: 23, y: 20, value: BlockType.Brick },
      { x: 22, y: 21, value: BlockType.Brick },
      { x: 23, y: 21, value: BlockType.Brick },

      { x: 22, y: 22, value: BlockType.Brick },
      { x: 23, y: 22, value: BlockType.Brick },
      { x: 22, y: 23, value: BlockType.Brick },
      { x: 23, y: 23, value: BlockType.Brick },

      // 22
      { x: 12, y: 17, value: BlockType.Brick },
      { x: 13, y: 17, value: BlockType.Brick },
      { x: 12, y: 18, value: BlockType.Brick },
      { x: 13, y: 18, value: BlockType.Brick },

      // 23
      { x: 11, y: 23, value: BlockType.Brick },
      { x: 11, y: 24, value: BlockType.Brick },
      { x: 11, y: 25, value: BlockType.Brick },

      { x: 12, y: 23, value: BlockType.Brick },
      { x: 13, y: 23, value: BlockType.Brick },

      { x: 14, y: 23, value: BlockType.Brick },
      { x: 14, y: 24, value: BlockType.Brick },
      { x: 14, y: 25, value: BlockType.Brick },
    ],
  },
  2: {
    name: "2",
    order: -1,
    data: [
      { x: 8, y: 5, value: 1 },
      { x: 9, y: 5, value: 1 },
      { x: 10, y: 5, value: 1 },
      { x: 11, y: 5, value: 1 },
      { x: 12, y: 5, value: 1 },
      { x: 13, y: 5, value: 1 },
      { x: 14, y: 5, value: 1 },
      { x: 15, y: 5, value: 1 },
      { x: 16, y: 5, value: 1 },
      { x: 17, y: 5, value: 1 },
      { x: 6, y: 6, value: 1 },
      { x: 7, y: 6, value: 1 },
      { x: 8, y: 6, value: 1 },
      { x: 17, y: 6, value: 1 },
      { x: 18, y: 6, value: 1 },
      { x: 19, y: 6, value: 1 },
      { x: 5, y: 7, value: 1 },
      { x: 6, y: 7, value: 1 },
      { x: 19, y: 7, value: 1 },
      { x: 20, y: 7, value: 1 },
      { x: 4, y: 8, value: 1 },
      { x: 5, y: 8, value: 1 },
      { x: 20, y: 8, value: 1 },
      { x: 21, y: 8, value: 1 },
      { x: 4, y: 9, value: 1 },
      { x: 21, y: 9, value: 1 },
      { x: 4, y: 10, value: 1 },
      { x: 4, y: 11, value: 1 },
      { x: 4, y: 12, value: 1 },
      { x: 5, y: 12, value: 1 },
      { x: 14, y: 12, value: 1 },
      { x: 15, y: 12, value: 1 },
      { x: 16, y: 12, value: 1 },
      { x: 17, y: 12, value: 1 },
      { x: 18, y: 12, value: 1 },
      { x: 19, y: 12, value: 1 },
      { x: 20, y: 12, value: 1 },
      { x: 5, y: 13, value: 1 },
      { x: 6, y: 13, value: 1 },
      { x: 7, y: 13, value: 1 },
      { x: 8, y: 13, value: 1 },
      { x: 9, y: 13, value: 1 },
      { x: 10, y: 13, value: 1 },
      { x: 11, y: 13, value: 1 },
      { x: 12, y: 13, value: 1 },
      { x: 13, y: 13, value: 1 },
      { x: 14, y: 13, value: 1 },
      { x: 20, y: 13, value: 1 },
      { x: 21, y: 13, value: 1 },
      { x: 21, y: 14, value: 1 },
      { x: 20, y: 15, value: 1 },
      { x: 21, y: 15, value: 1 },
      { x: 9, y: 16, value: 1 },
      { x: 10, y: 16, value: 1 },
      { x: 11, y: 16, value: 1 },
      { x: 12, y: 16, value: 1 },
      { x: 13, y: 16, value: 1 },
      { x: 14, y: 16, value: 1 },
      { x: 15, y: 16, value: 1 },
      { x: 16, y: 16, value: 1 },
      { x: 17, y: 16, value: 1 },
      { x: 18, y: 16, value: 1 },
      { x: 19, y: 16, value: 1 },
      { x: 20, y: 16, value: 1 },
      { x: 7, y: 17, value: 1 },
      { x: 8, y: 17, value: 1 },
      { x: 9, y: 17, value: 1 },
      { x: 6, y: 18, value: 1 },
      { x: 7, y: 18, value: 1 },
    ],
  },
};
