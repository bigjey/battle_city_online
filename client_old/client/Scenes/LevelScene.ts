import { ICellData, IScene } from "..";
import { TANK_WIDTH } from "../constants";
import { Block } from "../gameplay/Block";
import { gameManager } from "../gameplay/GameManager";
import { keysPressed } from "../keyboard";
import levels from "../levels";
import { buildLevel, wait } from "../utils";

import mainMenuSceneInstance from "./MainMenuScene";

const STAGE_WIDTH = 16 * TANK_WIDTH;
const STAGE_HEIGHT = 14 * TANK_WIDTH;
const LOADING_TIME = 2000;
const RESPAWN_TIME = 5000;

export class LevelScene implements IScene {
  levelNumber: number;
  loaded = false;
  lastSpawnTime = 0;
  blocks: (Block | null)[][] = [];

  constructor(levelNumber = 1) {
    this.levelNumber = levelNumber;

    const levelData = levels[levelNumber];
    if (!levelData) {
      throw new Error(`can't initialize level ${levelNumber}`);
    } else {
      this.blocks = buildLevel(levelData);
    }
    this.loadingSequence().then(() => {
      this.loaded = true;
    });
  }

  render(): void {
    if (this.loaded) {
      this.renderLevel();
    } else {
      this.renderLoading();
    }
  }
  update(): void {
    if (keysPressed["Escape"]) {
      gameManager.currentScene = mainMenuSceneInstance;
    }

    if (!this.loaded) return;

    for (const tank of gameManager.tanks) {
      tank.update();
    }

    for (const bullet of gameManager.bullets) {
      bullet.update();
    }

    for (const explosion of gameManager.explosions) {
      explosion.update();
    }

    for (const tank of gameManager.tanks) {
      if (tank.destroy) {
        gameManager.removeTank(tank);
      }
    }

    for (const bullet of gameManager.bullets) {
      if (bullet.destroy) {
        gameManager.removeBullet(bullet);
      }
    }

    const now = Date.now();

    if (
      gameManager.tanks.length < 4 &&
      now - this.lastSpawnTime > RESPAWN_TIME
    ) {
      if (gameManager.addEnemyTank()) {
        this.lastSpawnTime = now;
      }
    }
  }

  loadingSequence(): Promise<undefined> {
    return wait(LOADING_TIME);
  }

  renderLoading(): void {
    const x = (gameManager.canvas.width - STAGE_WIDTH) * 0.5;
    const y = (gameManager.canvas.height - STAGE_HEIGHT) * 0.5;
    const half = {
      x: STAGE_WIDTH * 0.5,
      y: STAGE_HEIGHT * 0.5,
    };
    gameManager.ctx.translate(x, y);

    gameManager.ctx.fillStyle = "#fff4";
    gameManager.ctx.fillRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);

    gameManager.ctx.fillStyle = "#fff";
    gameManager.ctx.font = "36px Arial";
    gameManager.ctx.textBaseline = "middle";
    gameManager.ctx.textAlign = "center";
    gameManager.ctx.fillText(`STAGE   ${this.levelNumber}`, half.x, half.y);

    gameManager.ctx.translate(-x, -y);
  }

  renderLevel(): void {
    const x = (gameManager.canvas.width - STAGE_WIDTH) * 0.5;
    const y = (gameManager.canvas.height - STAGE_HEIGHT) * 0.5;

    gameManager.ctx.translate(x, y);

    gameManager.ctx.fillStyle = "#fff4";
    gameManager.ctx.fillRect(0, 0, STAGE_WIDTH, STAGE_HEIGHT);

    gameManager.ctx.translate(TANK_WIDTH, TANK_WIDTH * 0.5);
    gameManager.ctx.fillStyle = "#000";
    gameManager.ctx.fillRect(
      0,
      0,
      STAGE_WIDTH - 3 * TANK_WIDTH,
      STAGE_HEIGHT - TANK_WIDTH
    );

    gameManager.base.render();
    for (const bullet of gameManager.bullets) {
      bullet.render();
    }
    for (const tank of gameManager.tanks) {
      tank.render();
    }
    for (const row of this.blocks) {
      for (const block of row) {
        if (block) {
          block.render();
        }
      }
    }
    for (const explosion of gameManager.explosions) {
      explosion.render();
    }

    gameManager.ctx.translate(-TANK_WIDTH, -TANK_WIDTH * 0.5);
    gameManager.ctx.translate(-x, -y);
  }
}
