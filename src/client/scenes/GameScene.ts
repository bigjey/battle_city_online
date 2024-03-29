import {
  IBlockData,
  IBulletData,
  ILevelState,
  ILocalGame,
  IScene,
  ITankData,
} from "../../types";
import {
  BATTLEFIELD_H,
  BATTLEFIELD_W,
  BATTLEFIELD_X,
  BATTLEFIELD_Y,
  BLOCKS_IN_ROW,
  BlockType,
  BLOCK_SIZE,
  BULLET_SIZE,
  CLUSTER_SIZE,
  Command,
  DIR,
  KEYS,
  TANK_SIZE,
} from "../../constants";
import GameManager from "../GameManager";
import { keysPressed } from "../keyboard";
import { LocalGame } from "../LocalGame";
import editorScene from "./EditorScene";

const { ctx, canvas } = GameManager.renderer;

export class GameScene implements IScene {
  levelId: number;
  local: boolean;

  gameId: string | null = null;
  localGame: LocalGame | undefined;
  onlineGameState: ILevelState | undefined;

  constructor(levelId = 1, local = true) {
    this.levelId = levelId;
    this.local = local;

    if (local) {
      this.localGame = new LocalGame(1);
    } else {
      this.setupOnlineGame();
    }
  }

  update(): void {
    this.handleInput();

    this.localGame?.update();
  }

  render(): void {
    const state = this.getState();

    if (!state) {
      return;
    }

    ctx.fillStyle = "#555";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.translate(BATTLEFIELD_X, BATTLEFIELD_Y);

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, BATTLEFIELD_W, BATTLEFIELD_H);

    state.bullets.forEach((bullet) => {
      renderBullet(bullet);
    });

    state.tanks.forEach((tank) => {
      renderTank(tank);
    });

    for (let i = 0; i < state.blocks.length; i++) {
      const block = state.blocks[i];
      if (block) {
        const x = i % BLOCKS_IN_ROW;
        const y = Math.floor(i / BLOCKS_IN_ROW);

        renderBlock(block.type, x, y);
      }
    }

    ctx.translate(-BATTLEFIELD_X, -BATTLEFIELD_Y);
  }

  getState(): ILevelState | null {
    if (this.local) {
      if (this.localGame) {
        return this.localGame.getState();
      } else {
        throw new Error("no local game");
      }
    } else {
      if (this.onlineGameState) {
        return this.onlineGameState;
      } else {
        return null;
      }
    }
  }

  handleInput(): void {
    if (keysPressed["KeyE"]) {
      GameManager.activeScene = editorScene;
    }

    if (keysPressed["KeyC"] && !this.gameId) {
      GameManager.socket.emit("start", (gameId: string) => {
        this.gameId = gameId;
      });
    }

    if (keysPressed["KeyJ"] && !this.gameId) {
      GameManager.socket.emit("join", (gameId: string) => {
        this.gameId = gameId;
      });
    }

    if (keysPressed[KEYS.LEFT]) {
      this.sendCommand(Command.PlayerMove, { dir: DIR.LEFT });
    } else if (keysPressed[KEYS.RIGHT]) {
      this.sendCommand(Command.PlayerMove, { dir: DIR.RIGHT });
    } else if (keysPressed[KEYS.UP]) {
      this.sendCommand(Command.PlayerMove, { dir: DIR.UP });
    } else if (keysPressed[KEYS.DOWN]) {
      this.sendCommand(Command.PlayerMove, { dir: DIR.DOWN });
    }

    if (keysPressed[KEYS.SHOOT]) {
      this.sendCommand(Command.PlayerShoot);
    }

    if (this.local) {
      this.localGame?.handleInput();
    } else {
      //
    }
  }

  setupOnlineGame(): void {
    GameManager.socket.on("gameState", (gameState: ILevelState) => {
      this.onlineGameState = gameState;
    });
  }

  sendCommand(command: Command, payload?: any): void {
    if (this.gameId) {
      GameManager.socket.emit("command", { command, payload });
    }
  }
}

function renderTank(tankData: ITankData): void {
  ctx.fillStyle = "#fff";
  ctx.fillRect(tankData.position.x, tankData.position.y, TANK_SIZE, TANK_SIZE);
}

function renderBullet(bulletData: IBulletData): void {
  ctx.fillStyle = "#fff";
  ctx.fillRect(
    bulletData.position.x,
    bulletData.position.y,
    BULLET_SIZE,
    BULLET_SIZE
  );
}

export function renderBlock(
  type: BlockType,
  blockX: number,
  blockY: number
): void {
  // console.log("render block", type, blockX, blockY);
  const spriteIndex = (blockY % 2) * 2 + (blockX % 2);

  switch (type) {
    case BlockType.Brick:
      // ctx.drawImage(
      //   SPRITES[`brick_${spriteIndex + 1}`].img as CanvasImageSource,
      //   blockX * BLOCK_SIZE,
      //   blockY * BLOCK_SIZE
      // );
      ctx.fillStyle = "brown";
      ctx.fillRect(
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );
      break;
    case BlockType.Steel:
      // ctx.drawImage(
      //   SPRITES[`stone_${spriteIndex + 1}`].img as CanvasImageSource,
      //   blockX * BLOCK_SIZE,
      //   blockY * BLOCK_SIZE
      // );
      ctx.fillStyle = "#fffa";
      ctx.fillRect(
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );
      break;
    case BlockType.Tree:
      // ctx.drawImage(
      //   SPRITES[`tree_${spriteIndex + 1}`].img as CanvasImageSource,
      //   blockX * BLOCK_SIZE,
      //   blockY * BLOCK_SIZE
      // );
      ctx.fillStyle = "green";
      ctx.fillRect(
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );
      break;
    case BlockType.Water:
      // ctx.drawImage(
      //   SPRITES[`water_${spriteIndex + 1}`].img as CanvasImageSource,
      //   blockX * BLOCK_SIZE,
      //   blockY * BLOCK_SIZE
      // );
      ctx.fillStyle = "blue";
      ctx.fillRect(
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );
      break;
    default:
      ctx.fillStyle = "pink";
      ctx.fillRect(
        blockX * BLOCK_SIZE,
        blockY * BLOCK_SIZE,
        BLOCK_SIZE,
        BLOCK_SIZE
      );
    // gameManager.ctx.fillRect(
    //   blockX * BLOCK_SIZE,
    //   blockY * BLOCK_SIZE,
    //   BLOCK_SIZE,
    //   BLOCK_SIZE
    // );
  }
}

export function renderCluster(
  type: BlockType,
  clusterX: number,
  clusterY: number
): void {
  const blockX = clusterX * CLUSTER_SIZE;
  const blockY = clusterY * CLUSTER_SIZE;

  for (let dy = 0; dy < CLUSTER_SIZE; dy++) {
    for (let dx = 0; dx < CLUSTER_SIZE; dx++) {
      renderBlock(type, blockX + dx, blockY + dy);
    }
  }
}

function generateLevelData(): ILevelState {
  return {
    levelId: 0,
    tanks: [],
    bullets: [],
    blocks: [],
  };
}
