import "./keyboard";

import GameManager from "./GameManager";
import mainMenuScene from "./scenes/MenuScene";
import { GameScene } from "./scenes/GameScene";

const { ctx, canvas } = GameManager.renderer;

function initialize() {
  GameManager.activeScene = mainMenuScene;
  // GameManager.activeScene = new GameScene(1, false);
}

function update() {
  GameManager.activeScene?.update();
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  GameManager.activeScene?.render();
}

function tick() {
  update();
  render();

  requestAnimationFrame(tick);
}

initialize();
tick();
