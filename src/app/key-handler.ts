export class KeyHandler {

  private pressedKeys: {[key: string]: boolean} = {};

  public getPressedKeys() {
    return JSON.parse(JSON.stringify(this.pressedKeys));
  }

  public init() {
    window.addEventListener('keydown', ({key}) => {
     this.pressedKeys[key] = true;
    });

    window.addEventListener('keyup', ({key}) => {
     this.pressedKeys[key] = false;
    });
  }
}
