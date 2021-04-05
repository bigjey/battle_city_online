declare module "*.png";

import type { BlockType } from "./constants";

export interface IXY {
  x: number;
  y: number;
}

export interface IGameManager {
  activeScene: IScene | null;
  renderer: {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
  };
}

export interface IScene {
  render(): void;
  update(): void;
}

export interface ILevelState {
  levelId: number;
  tanks: ITankData[];
  bullets: IBulletData[];
  blocks: (IBlockData | null)[];
}

export interface ITankData {
  position: IXY;
}

export interface IBulletData {
  position: IXY;
}

export interface IBlockData {
  type: BlockType;
}

export interface ILocalGame {
  getState(): ILevelState;
}

export interface ILevel {
  name: string;
  order: number;
  data: ICellData[];
}

export interface ICellData {
  x: number;
  y: number;
  value: BlockType;
}
