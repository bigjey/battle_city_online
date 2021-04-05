export const keysPressed: Record<string, boolean> = {};
export const KEY = {
  ArrowLeft: "ArrowLeft",
};

window.addEventListener("keydown", function (e) {
  keysPressed[e.code] = true;

  console.info("DEBUG: Keydown: ", e.code);
});

window.addEventListener("keyup", function (e) {
  keysPressed[e.code] = false;
});
