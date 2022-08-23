export default class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
    this.height = 150;
  }

  draw(context) {
    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, 50, this.height);
  }

  update(gravity = 0.2) {
    console.log(this.velocity.y);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y * gravity;
    if (this.isOnGround()) {
      this.position.y = 720 - this.height;
      this.velocity.y = 0;
    }
  }

  isOnGround() {
    return this.position.y + this.height + this.velocity.y >= 720;
  }
}
