import Sprite from "./sprite.js";
import { move, stop, jump, gravity, isOnGround } from "./movement.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let doubleJump = false;
let gunOffset = {
  x: 0,
  y: 0,
  lookingAt: function (x, y, maxX, minX, maxY, minY) {
    x > maxX ? (this.x = maxX) : x < minX ? (this.x = minX) : (this.x = x);
    y > maxY ? (this.y = maxY) : y < minY ? (this.y = minY) : (this.y = y);
  },
};

canvas.width = 1280;
canvas.height = 720;

const player = new Sprite({
  position: { x: 100, y: 100 },
  velocity: { x: 0, y: 0 },
  width: 50,
  height: 150,
  img: new Image(),
  imgSrc: "./images/player.png",
});

const playerGun = new Sprite({
  position: { x: player.position.x, y: player.position.y },
  velocity: { x: 0, y: 0 },
  width: 50,
  height: 50,
  img: new Image(),
  imgSrc: "./images/player_gun.png",
});

player.draw(ctx);

function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
  playerGun.draw(ctx);
}

function loop() {
  requestAnimationFrame(loop);

  if (isOnGround(player, 720)) {
    doubleJump = false;
  }
  gravity(player);
  player.update();
  playerGun.followObject(player, gunOffset.x, gunOffset.y);
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

// find mouse position
window.addEventListener("mousemove", (event) => {
  if (event.clientX > player.position.x) {
    player.unflipSprite();
  } else {
    player.flipSprite();
  }
  gunOffset.lookingAt(
    event.clientX - player.position.x - player.width,
    event.clientY - player.position.y - player.height / 2,
    player.width,
    -player.width,
    player.height / 2,
    -25
  );
  console.log(gunOffset.x, gunOffset.y);
});
