declare module "*.png";

import { Socket } from "socket.io-client";
import type { BlockType, Command, DIR } from "./constants";

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
  socket: Socket;
}

export interface IGameRunner {
  tanks: Tank[];
  getState(): ILevelState;
}

export interface IScene {
  render(): void;
  update(): void;
  cleanup?(): void;
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

export interface ICommandData {
  command: Command;
  payload: any;
}

export interface IMoveCommandPayload {
  dir: DIR;
}
