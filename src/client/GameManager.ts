import { Socket } from "socket.io-client";
import { IGameManager, IScene } from "../types";
import Renderer from "./setupRenderer";
import { io } from "socket.io-client";

class GameManager implements IGameManager {
  private static _instance: IGameManager | null = null;

  _activeScene: IScene | null = null;
  renderer;
  socket: Socket;

  constructor() {
    this.renderer = Renderer;
    this.socket = io("http://localhost:3000", {});
  }

  static get Instance() {
    return GameManager._instance || (GameManager._instance = new GameManager());
  }

  get activeScene(): IScene | null {
    return this._activeScene;
  }

  set activeScene(scene: IScene | null) {
    this._activeScene?.cleanup && this._activeScene?.cleanup();
    this._activeScene = scene;

    console.log("new activeScene is", scene);
  }
}

export default GameManager.Instance;
