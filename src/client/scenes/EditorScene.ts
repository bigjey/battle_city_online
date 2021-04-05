import { IScene } from "../../types";
import GameManager from "../GameManager";
import { keysPressed } from "../keyboard";
import menuScene from "./MenuScene";

const { ctx } = GameManager.renderer;

export class EditorScene implements IScene {
  render(): void {
    ctx.fillRect(300, 300, 100, 10);
  }

  update(): void {
    this.handleInput();
  }

  handleInput(): void {
    if (keysPressed["KeyD"]) {
      GameManager.activeScene = menuScene;
    }
  }
}

export default new EditorScene();
