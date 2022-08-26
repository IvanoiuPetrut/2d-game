export function move(object, direction, acceleration, maxSpeed) {
  object.velocity.x += direction * acceleration;
  if (Math.abs(object.velocity.x) > maxSpeed) {
    object.velocity.x = maxSpeed * Math.sign(object.velocity.x);
  }
}

export function stop(object) {
  object.velocity.x = 0;
}

export function jump(object, jumpSpeed) {
  object.velocity.y += jumpSpeed;
  // console.log(object.velocity.y);
}

export function gravity(object, gravity = 0.2) {
  if (!object.isOnGround()) {
    object.velocity.y += gravity;
  }

  if (object.isOnGround()) {
    object.velocity.y = 0;
    object.position.y = 720 - object.height;
  }
}

export function isOnGround(object, floor) {
  return object.position.y + object.height + object.velocity.y >= floor;
}
