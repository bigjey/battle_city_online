import { Sprite, SPRITES } from "../preload";
import { gameManager } from "./GameManager";

const EXPLOSION_INTERVAL = 100;
const EXPLOSION_BIG_INTERVAL = 200;

export interface SpriteAnimation {
  sprites: Sprite[];
}

export class Explosion {
  startTime = 0;

  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  render(): void {
    //
  }

  update(): void {
    //
  }
}

export class ExplosionSmall extends Explosion {
  sprites = [
    SPRITES["explosion_small_1"],
    SPRITES["explosion_small_2"],
    SPRITES["explosion_small_3"],
  ];

  constructor(x: number, y: number) {
    super(x, y);

    this.startTime = Date.now();
  }

  update(): void {
    const now = Date.now();
    if (now - this.startTime > EXPLOSION_INTERVAL * 5) {
      gameManager.removeExplosion(this);
    }
  }
  render(): void {
    gameManager.ctx.drawImage(
      this.sprites[this.spriteIndex].img as CanvasImageSource,
      this.x - 16,
      this.y - 16
    );
  }
  get spriteIndex(): number {
    const now = Date.now();

    if (now - this.startTime < EXPLOSION_INTERVAL) {
      return 0;
    } else if (now - this.startTime < EXPLOSION_INTERVAL * 2) {
      return 1;
    } else if (now - this.startTime < EXPLOSION_INTERVAL * 3) {
      return 2;
    } else if (now - this.startTime < EXPLOSION_INTERVAL * 4) {
      return 1;
    } else {
      return 0;
    }
  }
}

export class ExplosionBig extends Explosion {
  sprites = [SPRITES["explosion_big_1"], SPRITES["explosion_big_2"]];

  constructor(x: number, y: number) {
    super(x, y);

    this.startTime = Date.now();
  }

  update(): void {
    const now = Date.now();
    if (now - this.startTime > EXPLOSION_BIG_INTERVAL * 3) {
      gameManager.removeExplosion(this);
    }
  }
  render(): void {
    gameManager.ctx.drawImage(
      this.sprites[this.spriteIndex].img as CanvasImageSource,
      this.x - 32,
      this.y - 32
    );
  }
  get spriteIndex(): number {
    const now = Date.now();

    if (now - this.startTime < EXPLOSION_BIG_INTERVAL) {
      return 0;
    } else if (now - this.startTime < EXPLOSION_BIG_INTERVAL * 2) {
      return 1;
    } else {
      return 0;
    }
  }
}
