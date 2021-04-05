import type { IXY } from "types";
import { DIR, MOVEMENT_SNAP_VALUE } from "../../constants";
import { randomInt } from "../../utils/random";
import snapValue from "../../utils/snapValue";
import { Tank } from "./Tank";

const changeDirectionIntervalMin = 2000;
const changeDirectionIntervalMax = 4000;

const AI_MOVE_STEP = 1.5;

// function randomTankSprite(): Sprite {
//   const tankVariant = randomInt(1, 8);
//   const sprite = SPRITES[`ai_tank_${tankVariant}`];

//   return sprite;
// }

export class AITank extends Tank {
  nextDirChange = 0;
  ai = true;
  constructor(x: number, y: number, game: any, dir?: DIR) {
    super({ x, y, game, dir /* , randomTankSprite() */ });

    this.scheduleNextDirChange();
  }

  update(): void {
    const now = Date.now();
    const prevPos: IXY = {
      x: this.pos.x,
      y: this.pos.y,
    };

    const newPos: IXY = {
      x: this.pos.x,
      y: this.pos.y,
    };

    switch (this.dir) {
      case DIR.LEFT:
        newPos.x -= AI_MOVE_STEP;
        this.pos.y = newPos.y = snapValue(this.pos.y, MOVEMENT_SNAP_VALUE);
        break;
      case DIR.RIGHT:
        newPos.x += AI_MOVE_STEP;
        this.pos.y = newPos.y = snapValue(this.pos.y, MOVEMENT_SNAP_VALUE);
        break;
      case DIR.UP:
        newPos.y -= AI_MOVE_STEP;
        this.pos.x = newPos.x = snapValue(this.pos.x, MOVEMENT_SNAP_VALUE);
        break;
      case DIR.DOWN:
        newPos.y += AI_MOVE_STEP;
        this.pos.x = newPos.x = snapValue(this.pos.x, MOVEMENT_SNAP_VALUE);
        break;
    }

    if (this.move(newPos)) {
      this.pos = newPos;

      if (now >= this.nextDirChange) {
        this.setRandomDir();
      }
    } else {
      // this.pos = prevPos;
      this.setRandomDir();
    }

    if (Math.random() < 0.015) {
      this.shoot();
    }
  }

  setRandomDir(): void {
    const dir: DIR = Math.floor(Math.random() * 4);
    this.setDir(dir);
    this.scheduleNextDirChange();
  }

  scheduleNextDirChange(): void {
    const nextChange = randomInt(
      changeDirectionIntervalMin,
      changeDirectionIntervalMax
    );
    this.nextDirChange = Date.now() + nextChange;
  }
}
