export enum GLOBAL_MODE {
  NORMAL_GAME,
  DEBUG_TEST_LEVEL,
  EDIT_TEST_LEVEL,
}

export const MOVE_STEP = 2;

export const CANVAS_WIDTH = 416;
export const CANVAS_HEIGHT = 416;

export const BLOCK_SIZE = 8;
export const CLUSTER_SIZE = 2;

export const BULLET_SIZE = 8;
export const BULLET_SPEED = 4;

export const TANK_WIDTH = 32;
export const TANK_HEIGHT = 32;

export const SHOOT_COLDOWN = 200;

export enum DIR {
  NONE = -1,
  UP = 0,
  RIGHT = 1,
  DOWN = 2,
  LEFT = 3,
}

export enum BlockType {
  Brick,
  Steel,
  Tree,
  Water,
}

export const KEYS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  SHOOT: "Space",
};
