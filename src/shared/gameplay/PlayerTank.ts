import snapValue from "../../utils/snapValue";
// import { KEYS, MOVEMENT_SNAP_VALUE, TANK_MOVE_STEP } from "../constants";
import {
  DIR,
  MOVEMENT_SNAP_VALUE,
  TANK_MOVE_STEP,
  TANK_SHOOT_COOLDOWN,
} from "../../constants";
import { Tank } from "./Tank";
import { GameRunner } from "../GameRunner";
import { IXY } from "../../types";

export class PlayerTank extends Tank {
  constructor(x: number, y: number, game: GameRunner, dir?: number) {
    super({ x, y, dir, game /* , SPRITES.player_1 */ });
  }

  moveInDirection(dir: DIR): void {
    const prevPos = {
      x: this.pos.x,
      y: this.pos.y,
    };

    const newPos = {
      x: this.pos.x,
      y: this.pos.y,
    };
    if (dir === DIR.LEFT) {
      newPos.x -= TANK_MOVE_STEP;
      this.pos.y = newPos.y = snapValue(this.pos.y, MOVEMENT_SNAP_VALUE);
    } else if (dir === DIR.RIGHT) {
      newPos.x += TANK_MOVE_STEP;
      this.pos.y = newPos.y = snapValue(this.pos.y, MOVEMENT_SNAP_VALUE);
    } else if (dir === DIR.UP) {
      newPos.y -= TANK_MOVE_STEP;
      this.pos.x = newPos.x = snapValue(this.pos.x, MOVEMENT_SNAP_VALUE);
    } else if (dir === DIR.DOWN) {
      newPos.y += TANK_MOVE_STEP;
      this.pos.x = newPos.x = snapValue(this.pos.x, MOVEMENT_SNAP_VALUE);
    }

    this.setDir(dir);

    if (this.move(newPos)) {
      this.pos = newPos;
    } else {
      // this.pos = prevPos;
    }
  }

  tryShoot(): void {
    if (
      !this.bullet &&
      (!this.lastShot || Date.now() - this.lastShot >= TANK_SHOOT_COOLDOWN)
    ) {
      this.shoot();
    }
  }
}
