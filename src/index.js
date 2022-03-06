import Paddle from "/src/paddle";
import Player from "/src/player";
import InputHandler from "/src/inputHandler";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

let xPos = Math.random() * 500 + 150;

let paddle = new Paddle(xPos, GAME_HEIGHT);
let player = new Player();

new InputHandler(player);

paddle.draw(ctx);

let lasttime = 0;

function gameLoop(timestamp) {
  let deltatime = timestamp - lasttime;
  lasttime = timestamp;
  ctx.clearRect(0, 0, 800, 600);
  paddle.update(deltatime, 25);
  player.update();
  paddle.draw(ctx);
  player.draw(ctx);
  if (paddle.position.y > 600) {
    paddle.setPos(Math.random() * 500 + 150, 0);
  }

  requestAnimationFrame(gameLoop);
}

gameLoop();
