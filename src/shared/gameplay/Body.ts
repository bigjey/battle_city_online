import type { IXY } from "../../types";

export class Body {
  pos: IXY = {
    x: 0,
    y: 0,
  };
  size: IXY = {
    x: 0,
    y: 0,
  };
  constructor(x = 0, y = 0, w = 0, h = 0) {
    this.pos.x = x;
    this.pos.y = y;
    this.size.x = w;
    this.size.y = h;
  }
  get t(): number {
    return this.pos.y;
  }
  get l(): number {
    return this.pos.x;
  }
  get b(): number {
    return this.pos.y + this.size.y;
  }
  get r(): number {
    return this.pos.x + this.size.x;
  }
  get center(): IXY {
    return {
      x: this.pos.x + this.size.x / 2,
      y: this.pos.y + this.size.y / 2,
    };
  }
}
