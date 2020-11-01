import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  DIR,
  GLOBAL_MODE,
  TANK_HEIGHT,
  TANK_WIDTH,
} from "./constants";
import { preloadAssets } from "./preload";

import { gameManager } from "./gameplay/GameManager";
import { levelEditor } from "./level-editor";
import { PlayerTank } from "./gameplay/PlayerTank";
import { AITank } from "./gameplay/AITank";
import { AABBIntersects, randomInt } from "./utils";
import { Base } from "./gameplay/Base";
import { Body } from "./gameplay/Body";
import { ExplosionSmall } from "./gameplay/Explosion";

let lastSpawnTime = 0;

const respawnSpots: number[][] = [
  [0, 0],
  [190, 0],
  [386, 0],
];

function update() {
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

  if (gameManager.tanks.length < 4 && now - lastSpawnTime > 5000) {
    const [x, y] = respawnSpots[randomInt(0, respawnSpots.length)];
    const body = new Body(x, y, TANK_WIDTH, TANK_HEIGHT);

    let canPlace = true;

    for (const tank of gameManager.tanks) {
      if (AABBIntersects(tank, body)) {
        canPlace = false;
      }
    }

    for (const bullet of gameManager.bullets) {
      if (AABBIntersects(bullet, body)) {
        canPlace = false;
      }
    }

    if (canPlace) {
      gameManager.tanks.push(new AITank(x, y, DIR.DOWN));

      lastSpawnTime = now;
    }
  }
}

function render() {
  gameManager.ctx.fillStyle = "#000";
  gameManager.ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  gameManager.base.render();

  for (const bullet of gameManager.bullets) {
    bullet.render();
  }

  for (const tank of gameManager.tanks) {
    tank.render();
  }
  for (const row of gameManager.blocks) {
    for (const block of row) {
      if (block) {
        block.render();
      }
    }
  }

  for (const explosion of gameManager.explosions) {
    explosion.render();
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

gameManager.tanks.push(new PlayerTank(128, 386, DIR.UP));

preloadAssets().then(tick);
