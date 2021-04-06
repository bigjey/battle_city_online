export const TANK_SIZE = 32;
export const BLOCK_SIZE = 8;
export const CLUSTER_SIZE = 2;

export const CLUSTERS_IN_ROW = 26;
export const BLOCKS_IN_ROW = 52;

export const TANK_MOVE_STEP = 2;
export const TANK_SHOOT_COOLDOWN = 200;

export const MOVEMENT_SNAP_VALUE = BLOCK_SIZE * 2;

export const GAME_WIDTH = 16 * TANK_SIZE;
export const GAME_HEIGHT = 14 * TANK_SIZE;

export const BATTLEFIELD_X = TANK_SIZE;
export const BATTLEFIELD_Y = TANK_SIZE * 0.5;
export const BATTLEFIELD_W = 13 * TANK_SIZE;
export const BATTLEFIELD_H = 13 * TANK_SIZE;

export const BULLET_SIZE = 8;
export const BULLET_SPEED = 4;

export const KEYS = {
  LEFT: "ArrowLeft",
  RIGHT: "ArrowRight",
  UP: "ArrowUp",
  DOWN: "ArrowDown",
  SHOOT: "Space",
};

export enum DIR {
  NONE = -1,
  UP = 0,
  RIGHT = 1,
  DOWN = 2,
  LEFT = 3,
}

export enum BlockType {
  None = 0,
  Brick,
  Steel,
  Tree,
  Water,
}

export enum Command {
  PlayerMove,
  PlayerShoot,
}
