import Sprite from "./sprite.js";
import { move, stop, jump, gravity, isOnGround } from "./movement.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let jumpCount = 0;

canvas.width = 1280;
canvas.height = 720;

const player = new Sprite({
  position: { x: 100, y: 100 },
  velocity: { x: 0, y: 0 },
});

player.draw(ctx);

function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
}

function loop() {
  requestAnimationFrame(loop);

  gravity(player);
  player.update();
  render();
}

loop();

// move the player left and right
window.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "d":
      move(player, 1, 7, 7);
      break;
    case "a":
      move(player, -1, 7, 7);
      break;
    case "w":
      console.log("1 step " + jumpCount);
      if (!isOnGround(player, 720) && jumpCount === 1) {
        jump(player, -10);
        console.log("2 step " + jumpCount);
        jumpCount = 0;
        console.log("3 step " + jumpCount);
      }
      if (isOnGround(player, 720)) {
        jump(player, -10);
      }
      jumpCount++;
      console.log("4 step " + jumpCount);
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "d":
      stop(player);
      break;
    case "a":
      stop(player);
      break;
  }
});
