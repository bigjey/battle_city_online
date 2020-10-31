import { CANVAS_HEIGHT, CANVAS_WIDTH, GLOBAL_MODE } from "./constants";
import { preloadAssets } from "./preload";
import { Tank } from "./gameplay/Tank";

import { gameManager } from "./gameplay/GameManager";
import { levelEditor } from "./level-editor";

function update() {
  gameManager.player1?.update();

  for (const bullet of gameManager.bullets) {
    bullet.update();
  }
}

function render() {
  gameManager.ctx.fillStyle = "#000";
  gameManager.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  gameManager.player1?.render();

  for (const bullet of gameManager.bullets) {
    bullet.render();
  }

  for (const row of gameManager.blocks) {
    for (const block of row) {
      if (block) {
        block.render();
      }
    }
  }
}

function tick() {
  switch (gameManager.mode) {
    case GLOBAL_MODE.NORMAL_GAME: {
      gameManager.ctx.fillStyle = "pink";
      gameManager.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
      break;
    }
    case GLOBAL_MODE.DEBUG_TEST_LEVEL: {
      update();
      render();
      break;
    }
    case GLOBAL_MODE.EDIT_TEST_LEVEL: {
      levelEditor.render();
      break;
    }
    default:
  }

  window.setTimeout(tick, 1000 / 60);
}

{
  gameManager.player1 = new Tank(0, 0);
  gameManager.blocks = new Array(52)
    .fill(null)
    .map(() => new Array(52).fill(null));
  gameManager.bullets = [];
}

preloadAssets().then(tick);
