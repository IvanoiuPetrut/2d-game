export default class Sprite {
  constructor({ position, velocity, width, height, angle = 0, img, imgSrc }) {
    this.position = position;
    this.velocity = velocity;
    this.height = height;
    this.width = width;
    this.angle = angle;
    this.img = img || new Image();
    this.img.src = imgSrc;
  }

  draw(context) {
    if (this.angle > 0) {
      context.save();
      context.translate(this.position.x, this.position.y);
      context.rotate((this.angle * Math.PI) / 180);
      context.drawImage(
        this.img,
        -this.width / 2,
        -this.height / 2,
        this.width,
        this.height
      );
      context.restore();
    } else {
      context.drawImage(
        this.img,
        this.position.x,
        this.position.y,
        this.width,
        this.height
      );
    }
  }

  update() {
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  followObject(object, offsetX = 0, offsetY = 0) {
    this.position.x = object.position.x + offsetX;
    this.position.y = object.position.y + offsetY;
  }

  isOnGround() {
    return this.position.y + this.height + this.velocity.y >= 720;
  }

  flipSprite() {
    this.img.src = "./images/player_flippedY.png";
  }

  unflipSprite() {
    this.img.src = "./images/player.png";
  }
}
