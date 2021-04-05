import { BlockType, BLOCK_SIZE } from "../constants";
import { renderBlock } from "../utils";
import { Body } from "./Body";

export class Block extends Body {
  x: number;
  y: number;
  type: BlockType;
  constructor(blockX: number, blockY: number, type: BlockType) {
    super(blockX * BLOCK_SIZE, blockY * BLOCK_SIZE, BLOCK_SIZE, BLOCK_SIZE);

    this.x = blockX;
    this.y = blockY;
    this.type = type;
  }
  render(): void {
    renderBlock(this.type, this.x, this.y);
  }
  get isWalkable(): boolean {
    switch (this.type) {
      case BlockType.Tree:
        return true;
      default:
        return false;
    }
  }
  get isDamagable(): boolean {
    switch (this.type) {
      case BlockType.Brick:
        return true;
      default:
        return false;
    }
  }
  get isSolid(): boolean {
    switch (this.type) {
      case BlockType.Brick:
      case BlockType.Steel:
        return true;
      default:
        return false;
    }
  }
}
