const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 1280;
canvas.height = 720;
console.log(canvas.width);

// fill rect
ctx.fillStyle = "darkblue";
ctx.fillRect(0, 0, canvas.width, canvas.height);

class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }

  draw() {
    ctx.fillStyle = "white";
    ctx.fillRect(this.position.x, this.position.y, 50, 50);
  }
}

const player = new Sprite({
  position: { x: 100, y: 100 },
  velocity: { x: 0, y: 10 },
});

player.draw();

function update(object) {
  object.position.x += object.velocity.x;
  object.position.y += object.velocity.y;
}

function render() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  player.draw();
}

function loop() {
  update(player);
  render();
  requestAnimationFrame(loop);
}

loop();
