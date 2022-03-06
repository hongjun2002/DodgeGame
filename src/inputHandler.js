export default class InputHandler {
  constructor(player) {
    document.addEventListener("keydown", (event) => {
      switch (event.keyCode) {
        case 37:
          player.moveLeft();
          break;

        case 39:
          player.moveRight();
          break;

        default:
          break;
      }
    });
  }
}
