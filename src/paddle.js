export default class Paddle {
  constructor(gameWidth, gameHeight) {
    this.width = 150;
    this.height = 30;
    this.position = {
      x: gameWidth / 2 - this.width / 2,
      y: this.height - 30
    };
  }

  draw(ctx) {
    ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update(deltaTime, speed) {
    if (!deltaTime) return;
    this.position.y += speed / deltaTime;
  }

  setPos(x, y) {
    this.position.x = x;
    this.position.y = y;
  }
}
