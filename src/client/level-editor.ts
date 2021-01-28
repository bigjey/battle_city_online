import { XY } from ".";
import {
  BlockType,
  BLOCK_SIZE,
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  CLUSTER_SIZE,
  GLOBAL_MODE,
} from "./constants";
import { gameManager } from "./gameplay/GameManager";
import { eventEmitter, renderCluster } from "./utils";

interface ICellData {
  x: number;
  y: number;
  value: Array<BlockType>;
}

const $level_editor = document.getElementById("level-editor");
const $levels_dropdown = document.getElementById("level-selector");
const $pallete_colors: NodeListOf<HTMLDivElement> = document.querySelectorAll(
  ".pallete__color"
);
const $level_editor_clear = document.getElementById(
  "level-editor__clear-level"
);
const $level_editor_save = document.getElementById("level-editor__save-level");
const $level_editor_new = document.getElementById("level-editor__new-level");

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
  levelNames: string[] = [];
  selectedLevel: string | null = null;

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

    $level_editor_new?.addEventListener("click", (e) => {
      e.preventDefault();

      fetch("/api/levels", {
        method: "post",
      })
        .then((r) => r.json())
        .then((data) => {
          this.setLevelNames(data.levels);
          this.selectLevel(data.id);
        });
    });

    $level_editor_clear?.addEventListener("click", (e) => {
      e.preventDefault();

      gameManager.resetDebugLevel();
    });

    $level_editor_save?.addEventListener("click", (e) => {
      e.preventDefault();

      if (!this.selectedLevel) {
        return;
      }

      const levelData = [];

      for (const [y, row] of gameManager.debugLevel.entries()) {
        for (const [x, type] of row.entries()) {
          if (type !== null) {
            levelData.push({
              x: x,
              y: y,
              value: type,
            });
          }
        }
      }

      fetch(`/api/levels/${this.selectedLevel}`, {
        method: "post",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(levelData),
      });
    });

    $levels_dropdown?.addEventListener("change", (e) => {
      const levelName = ($levels_dropdown as HTMLSelectElement).value;
      if (levelName) {
        this.selectLevel(levelName);
        fetch(`/api/levels/${levelName}`)
          .then((r) => r.json())
          .then((levelData) => {
            const level = new Array(52 / CLUSTER_SIZE)
              .fill(null)
              .map(() => new Array(52 / CLUSTER_SIZE).fill(null));

            levelData.data.forEach((cellData: ICellData) => {
              level[cellData.y][cellData.x] = cellData.value;
            });

            gameManager.debugLevel = level;
          });
      } else {
        this.selectedLevel = null;
        gameManager.resetDebugLevel();
      }
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

    eventEmitter.on("set-game-mode", (mode: GLOBAL_MODE) => {
      switch (mode) {
        case GLOBAL_MODE.EDIT_TEST_LEVEL:
          ($level_editor as HTMLDivElement).style.display = "block";
          break;
        default:
          ($level_editor as HTMLDivElement).style.display = "none";
          break;
      }
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
    if (!this.selectedLevel) {
      return;
    }

    gameManager.debugLevel[xy.y][xy.x] = this.brush;

    this.save();
  }
  save(): void {
    gameManager.saveDebugLevel();
  }
  setLevelNames(value: string[]): void {
    this.levelNames = value;

    if ($levels_dropdown) {
      const levelNamesOptions =
        `<option></option>` +
        this.levelNames
          .map((levelName) => `<option>${levelName}</option>`)
          .join();

      $levels_dropdown.innerHTML = levelNamesOptions;
    }
  }
  selectLevel(id: string): void {
    this.selectedLevel = id;
    ($levels_dropdown as HTMLSelectElement).value = id;
    gameManager.resetDebugLevel();
  }
}

const instance = new LevelEditor();

window.levelEditor = instance;

export { instance as levelEditor };
