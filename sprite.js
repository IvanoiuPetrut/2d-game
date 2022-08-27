export default class Sprite {
  constructor({ position, velocity, width, height, img, imgSrc }) {
    this.position = position;
    this.velocity = velocity;
    this.height = height;
    this.width = width;
    this.img = img || new Image();
    this.img.src = imgSrc;
  }

  draw(context) {
    context.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height
    );
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
