export default class Sprite {
  constructor({ position, velocity }) {
    this.position = position;
    this.velocity = velocity;
  }

  draw(context) {
    context.fillStyle = "white";
    context.fillRect(this.position.x, this.position.y, 50, 50);
  }
}
