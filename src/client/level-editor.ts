import { XY } from ".";
import {
  BlockType,
  BLOCK_SIZE,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
} from "./constants";
import { gameManager } from "./gameplay/GameManager";
import { renderCluster } from "./utils";

const $level_editor = document.querySelectorAll("#level-editor");
const $pallete_colors: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  ".pallete__color"
);
const classnames: { [key: string]: string } = {
  activePaletteColor: "pallete__color--active",
};

const stringToBrush: { [name: string]: BlockType | null } = {
  empty: null,
  brick: BlockType.Brick,
  stone: BlockType.Steel,
  tree: BlockType.Tree,
  water: BlockType.Water,
};

const RESOLUTION = BLOCK_SIZE * CLUSTER_SIZE;

export class LevelEditor {
  brush: BlockType | null = null;
  hl: XY | null = null;
  mousePressed = false;

  constructor() {
    $pallete_colors.forEach(($color) => {
      $color.addEventListener("click", (e) => {
        const brushValue = $color.dataset.colorValue;
        if (brushValue) {
          const brushType = stringToBrush[brushValue];
          this.setBrush(brushType);

          $pallete_colors.forEach(($color) => {
            $color.classList.remove(classnames.activePaletteColor);
          });

          $color.classList.add(classnames.activePaletteColor);
        }
      });
    });

    gameManager.canvas.addEventListener("mousemove", (e) => {
      const x = Math.floor(e.offsetX / RESOLUTION);
      const y = Math.floor(e.offsetY / RESOLUTION);

      if (x >= 0 && x < 52 / CLUSTER_SIZE && y >= 0 && y < 52 / CLUSTER_SIZE) {
        this.setHL({ x, y });
        if (this.mousePressed) {
          this.paintCell({ x, y });
        }
      } else {
        this.setHL(null);
      }
    });

    gameManager.canvas.addEventListener("mouseleave", () => {
      this.setHL(null);
    });

    gameManager.canvas.addEventListener("mousedown", (e) => {
      this.mousePressed = true;

      const x = Math.floor(e.offsetX / RESOLUTION);
      const y = Math.floor(e.offsetY / RESOLUTION);

      if (x >= 0 && x < 52 / CLUSTER_SIZE && y >= 0 && y < 52 / CLUSTER_SIZE) {
        this.paintCell({ x, y });
      }
    });
    gameManager.canvas.addEventListener("mouseup", () => {
      this.mousePressed = false;
    });
  }
  render(): void {
    gameManager.ctx.fillStyle = "#000";
    gameManager.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    const res = BLOCK_SIZE * CLUSTER_SIZE;

    for (let i = 0; i < Math.floor(CANVAS_WIDTH / res); i++) {
      gameManager.ctx.strokeStyle = "#222";
      gameManager.ctx.lineWidth = 1;
      gameManager.ctx.beginPath();
      gameManager.ctx.moveTo(i * res, 0);
      gameManager.ctx.lineTo(i * res, CANVAS_HEIGHT);
      gameManager.ctx.closePath();
      gameManager.ctx.stroke();
      gameManager.ctx.beginPath();
      gameManager.ctx.moveTo(0, i * res);
      gameManager.ctx.lineTo(CANVAS_WIDTH, i * res);
      gameManager.ctx.closePath();
      gameManager.ctx.stroke();
    }

    for (const [clusterY, row] of gameManager.debugLevel.entries()) {
      for (const [clusterX, type] of row.entries()) {
        if (type !== null) {
          renderCluster(type, clusterX, clusterY);
        }
      }
    }

    if (this.hl) {
      gameManager.ctx.strokeStyle = "rgba(255,255,255,1)";
      gameManager.ctx.lineWidth = 2;
      gameManager.ctx.strokeRect(
        this.hl.x * RESOLUTION,
        this.hl.y * RESOLUTION,
        RESOLUTION,
        RESOLUTION
      );
    }
  }
  setBrush(brush: BlockType | null): void {
    this.brush = brush;
  }
  setHL(hl: XY | null): void {
    this.hl = hl;
  }
  paintCell(xy: XY): void {
    gameManager.debugLevel[xy.y][xy.x] = this.brush;

    this.save();
  }
  save(): void {
    localStorage.setItem("debugLevel", JSON.stringify(gameManager.debugLevel));
  }
}

const instance = new LevelEditor();

window.levelEditor = instance;

export { instance as levelEditor };
