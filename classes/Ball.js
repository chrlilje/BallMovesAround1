/**
 * Ball class - represents a ball that can move
 */
class Ball {
    /**
     * 
     * @param {number} x x-coordinate of the ball
     * @param {number} y y-coordinate of the ball
     * @param {number} size size of the ball
     * @param {object} style color of the ball
     */
  constructor(x, y, size, style) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.style = style;
  }

  /**
   * 
   * @param {*} velocity the speed of the ball
   * @param {*} direction the direction of the ball in radians (2 * PI = 360 degrees)
   */
  setVelocity(velocity, direction) {
    this.vx = velocity * Math.cos(direction);
    this.vy = velocity * Math.sin(direction);
  }

  /**
   * Move function is to be called every frame to update the position of the ball
   */
  move() {
    this.x += this.vx;
    this.y += this.vy;

    // Check if the ball is outside the walls
    if (this.x < 0 || this.x > width) {
      this.vx *= -1;
    }
    if (this.y < 0 || this.y > height) {
      this.vy *= -1;
    }
  }
 }