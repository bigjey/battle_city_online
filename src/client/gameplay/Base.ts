import { TANK_HEIGHT, TANK_WIDTH } from "../constants";
import { SPRITES } from "../preload";
import { Body } from "./Body";
import { gameManager } from "./GameManager";

const baseSprite = SPRITES["base"];
const baseDestroyedSprite = SPRITES["base_destroyed"];

export class Base extends Body {
  isDestroyed = false;

  constructor(x: number, y: number) {
    super(x, y, TANK_WIDTH, TANK_HEIGHT);
  }

  render(): void {
    const sprite = this.isDestroyed ? baseDestroyedSprite : baseSprite;
    gameManager.ctx.drawImage(
      sprite.img as CanvasImageSource,
      this.pos.x,
      this.pos.y
    );
  }

  destroy(): void {
    this.isDestroyed = true;
  }
}
