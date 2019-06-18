import { Player } from './player';

interface CursorPosition {
  screenX: number;
  screenY: number;
}

export class MouseMoveHandler {
  private lastPosition?: CursorPosition;

  public init(player: Player) {

    window.addEventListener('pointermove', (e) => console.log(e));

    addEventListener('mousemove', (e) => {
      // console.log(e);

      // const cursorPositio

      // n = {
      //   screenX,
      //   screenY,
      // };

      // if (this.lastPosition) {
      //   const cursorPositionDifference = {
      //     screenX: this.lastPosition.screenX - cursorPosition.screenX,
      //     screenY: this.lastPosition.screenY - cursorPosition.screenY,
      //   };

      //   player.rotateY(cursorPositionDifference.screenX / 500);
      //   player.rotateX(cursorPositionDifference.screenY / 500);
      // }

      // this.lastPosition = cursorPosition;
    });
  }
}
