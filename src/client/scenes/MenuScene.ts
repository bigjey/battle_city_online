import { IScene } from "../../types";
import GameManager from "../GameManager";
import { keysPressed } from "../keyboard";
import { GameScene } from "./GameScene";

enum Item {
  ONE_PLAYER,
  TWO_PLAYERS,
  CONSTRUCTION,
}

const MENU_ITEMS_COUNT = 3;
const SELECTION_THRESHOLD = 200;

const { ctx } = GameManager.renderer;

export class MenuScene implements IScene {
  private selected: Item = 0;
  private lastInteracted = 0;

  render(): void {
    ctx.fillStyle = "#fff";
    ctx.fillRect(50, 50, 50, 50);
  }

  update(): void {
    this.handleInput();
  }

  private handleInput(): void {
    if (keysPressed["ArrowDown"] && this.canSelect()) {
      this.selected = (this.selected + 1) % MENU_ITEMS_COUNT;
      this.lastInteracted = Date.now();
    }

    if (keysPressed["ArrowUp"] && this.canSelect()) {
      this.selected = (this.selected - 1 + MENU_ITEMS_COUNT) % MENU_ITEMS_COUNT;
      this.lastInteracted = Date.now();
    }

    if (keysPressed["Enter"]) {
      switch (this.selected) {
        case Item.ONE_PLAYER:
          GameManager.activeScene = new GameScene();
          break;
        case Item.TWO_PLAYERS:
          break;
        case Item.CONSTRUCTION:
          break;
        default:
          throw new Error("wtf am i supposed to do with this?");
      }
    }
  }

  private renderMenuItems(): void {
    // gameManager.ctx.font = "24px Arial";
    // gameManager.ctx.fillStyle = this.selected === 0 ? "#ff0c" : "#fff";
    // gameManager.ctx.fillText("1 PLAYER", 0, 30);
    // gameManager.ctx.fillStyle = this.selected === 1 ? "#ff0c" : "#fff";
    // gameManager.ctx.fillText("2 PLAYERS", 0, 60);
    // gameManager.ctx.fillStyle = this.selected === 2 ? "#ff0c" : "#fff";
    // gameManager.ctx.fillText("CONSTRUCTION", 0, 90);
  }

  private canSelect(): boolean {
    const now = Date.now();
    return now - this.lastInteracted > SELECTION_THRESHOLD;
  }
}

export default new MenuScene();
