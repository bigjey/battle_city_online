import { XY } from "..";
import { DIR, KEYS, MOVE_STEP, SHOOT_COLDOWN } from "../constants";
import { keysPressed } from "../keyboard";
import { SPRITES } from "../preload";
import { snapValue } from "../utils";
import { Tank } from "./Tank";

export class PlayerTank extends Tank {
  constructor(x: number, y: number, dir?: DIR) {
    super(x, y, dir, SPRITES.player_1);
  }

  update(): void {
    // movement
    const prevPos: XY = {
      x: this.pos.x,
      y: this.pos.y,
    };
    const newPos: XY = {
      x: this.pos.x,
      y: this.pos.y,
    };
    let newDir: DIR = DIR.NONE;
    if (keysPressed[KEYS.LEFT]) {
      newPos.x -= MOVE_STEP;
      this.pos.y = newPos.y = snapValue(this.pos.y);
      newDir = DIR.LEFT;
    } else if (keysPressed[KEYS.RIGHT]) {
      newPos.x += MOVE_STEP;
      this.pos.y = newPos.y = snapValue(this.pos.y);
      newDir = DIR.RIGHT;
    } else if (keysPressed[KEYS.UP]) {
      newPos.y -= MOVE_STEP;
      this.pos.x = newPos.x = snapValue(this.pos.x);
      newDir = DIR.UP;
    } else if (keysPressed[KEYS.DOWN]) {
      newPos.y += MOVE_STEP;
      this.pos.x = newPos.x = snapValue(this.pos.x);
      newDir = DIR.DOWN;
    }
    if (newDir !== DIR.NONE) {
      this.setDir(newDir);

      if (this.move(newPos)) {
        this.pos = newPos;
      } else {
        // this.pos = prevPos;
      }
    }

    // shooting
    if (
      !this.bullet &&
      (!this.lastShot || Date.now() - this.lastShot >= SHOOT_COLDOWN) &&
      keysPressed[KEYS.SHOOT]
    ) {
      this.shoot();
    }
  }
}
