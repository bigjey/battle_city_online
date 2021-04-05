import { makeAutoObservable } from "mobx";
import { IScene } from "..";
import { gameManager } from "../gameplay/GameManager";
import { keysPressed } from "../keyboard";
import { LevelScene } from "./LevelScene";

const MENU_ITEMS_COUNT = 3;
const SELECTION_THRESHOLD = 200;

class MainMenuScene implements IScene {
  menuItemSelected = 0;
  lastMenuInteraction = 0;

  constructor() {
    makeAutoObservable(this);
  }

  render(): void {
    this.renderMenuItems();
  }

  update(): void {
    this.handleInput();

    if (keysPressed["Enter"]) {
      switch (this.menuItemSelected) {
        case 0:
          gameManager.currentScene = new LevelScene();
          break;
        case 1:
          gameManager.currentScene = new LevelScene();
          break;
        case 2:
          break;
        default:
          break;
      }
    }
  }

  handleInput(): void {
    if (keysPressed["ArrowDown"] && this.canSelect()) {
      this.menuItemSelected = (this.menuItemSelected + 1) % MENU_ITEMS_COUNT;
      this.lastMenuInteraction = Date.now();
    }

    if (keysPressed["ArrowUp"] && this.canSelect()) {
      this.menuItemSelected =
        (this.menuItemSelected - 1 + MENU_ITEMS_COUNT) % MENU_ITEMS_COUNT;
      this.lastMenuInteraction = Date.now();
    }
  }

  renderMenuItems(): void {
    gameManager.ctx.font = "24px Arial";
    gameManager.ctx.fillStyle = this.menuItemSelected === 0 ? "#ff0c" : "#fff";
    gameManager.ctx.fillText("1 PLAYER", 0, 30);
    gameManager.ctx.fillStyle = this.menuItemSelected === 1 ? "#ff0c" : "#fff";
    gameManager.ctx.fillText("2 PLAYERS", 0, 60);
    gameManager.ctx.fillStyle = this.menuItemSelected === 2 ? "#ff0c" : "#fff";
    gameManager.ctx.fillText("CONSTRUCTION", 0, 90);
  }

  canSelect(): boolean {
    const now = Date.now();
    return now - this.lastMenuInteraction > SELECTION_THRESHOLD;
  }
}

const instance = new MainMenuScene();

export default instance;
