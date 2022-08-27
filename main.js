import Sprite from "./sprite.js";
import { move, stop, jump, gravity, isOnGround } from "./movement.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let doubleJump = false;

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

  if (isOnGround(player, 720)) {
    doubleJump = false;
  }
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
      if (isOnGround(player, 720) || doubleJump) {
        jump(player, -10);
        doubleJump = !doubleJump;
      }
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
