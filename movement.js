function move(object, direction, acceleration, maxSpeed) {
  object.velocity.x += direction * acceleration;
  if (Math.abs(object.velocity.x) > maxSpeed) {
    object.velocity.x = maxSpeed * Math.sign(object.velocity.x);
  }
}

function stop(object) {
  object.velocity.x = 0;
}
