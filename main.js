import Sprite from "./sprite.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;

const player = new Sprite({
  position: { x: 100, y: 100 },
  velocity: { x: 0, y: 0 },
});

console.log("before player.draw()");
player.draw(ctx);
console.log("after player.draw()");

function update(object) {
  object.position.x += object.velocity.x;
  object.position.y += object.velocity.y;
}

function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw(ctx);
}

function loop() {
  update(player);
  render();
  requestAnimationFrame(loop);
}

loop();

// move the player left and right
document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    player.velocity.x = -10;
  }
  if (event.key === "ArrowRight") {
    player.velocity.x = 10;
  }
});
