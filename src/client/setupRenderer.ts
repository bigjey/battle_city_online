import { GAME_HEIGHT, GAME_WIDTH } from "../constants";

const canvas = document.createElement("canvas");
let ctx: CanvasRenderingContext2D;

if (canvas.getContext("2d")) {
  ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
} else {
  throw new Error("Can't get canvas to work?");
}

document.body.appendChild(canvas);

canvas.width = GAME_WIDTH;
canvas.height = GAME_HEIGHT;

export default {
  canvas,
  ctx,
};

function onWindowResize() {
  const aspect = GAME_WIDTH / GAME_HEIGHT;

  const ww = window.innerWidth;
  const wh = window.innerHeight;

  let w, h: number;
  if (ww / wh > aspect) {
    h = wh;
    w = wh * aspect;
  } else {
    w = ww;
    h = ww / aspect;
  }

  canvas.style.width = `${w}px`;
  canvas.style.height = `${h}px`;
}

window.addEventListener("resize", onWindowResize);

onWindowResize();
