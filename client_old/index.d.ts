declare module "*.png";

export interface XY {
  x: number;
  y: number;
}

export interface IScene {
  render(): void;
  update(): void;
}

export interface ICellData {
  x: number;
  y: number;
  value: BlockType;
}

export interface ILevel {
  name: string;
  order: number;
  data: ICellData[];
}
