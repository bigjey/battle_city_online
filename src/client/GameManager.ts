import { IGameManager, IScene } from "../types";
import Renderer from "./setupRenderer";

class GameManager implements IGameManager {
  private static _instance: IGameManager | null = null;

  _activeScene: IScene | null = null;
  renderer;

  constructor() {
    this.renderer = Renderer;
  }

  static get Instance() {
    return GameManager._instance || (GameManager._instance = new GameManager());
  }

  get activeScene(): IScene | null {
    return this._activeScene;
  }

  set activeScene(scene: IScene | null) {
    this._activeScene = scene;

    console.log("new activeScene is", scene);
  }
}

export default GameManager.Instance;
