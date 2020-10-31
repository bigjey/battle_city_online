import { GLOBAL_MODE } from "./constants";
import { gameManager } from "./gameplay/GameManager";

export const keysPressed: { [key: string]: boolean } = {};

window.addEventListener("keypress", function (e) {
  switch (e.key) {
    case "1":
      gameManager.setMode(GLOBAL_MODE.NORMAL_GAME);
      break;
    case "2":
      gameManager.setMode(GLOBAL_MODE.DEBUG_TEST_LEVEL);
      break;
    case "3":
      gameManager.setMode(GLOBAL_MODE.EDIT_TEST_LEVEL);
      break;

    default:
      break;
  }
});

window.addEventListener("keydown", function (e) {
  keysPressed[e.code] = true;
});

window.addEventListener("keyup", function (e) {
  keysPressed[e.code] = false;
});
