export function angle(originX, originY, targetX, targetY) {
  let dx = originX - targetX;
  let dy = originY - targetY;
  let theta = Math.atan2(-dy, -dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  if (theta < 0) {
    theta = 360 + theta;
  }

  return theta;
}
