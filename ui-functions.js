
function mousePressed() {
    // Chreate a style object to add to the ball. with just one property: color
    let style = {
      color: color(random(255), random(255), random(255))
    };
    let b = new Ball(width / 2, height / 2, 20);
    b.style = style;
    // Set the velocity of the ball to 3 and the direction to the direction of the mouse
    b.setVelocity(3, Math.atan2(mouseY - b.y, mouseX - b.x));
    balls.push(b);
  
  }