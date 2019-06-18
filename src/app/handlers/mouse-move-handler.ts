import { Player } from '../player';

export class MouseMoveHandler {
  public init(player: Player) {
    addEventListener('mousemove', ({movementX, movementY}) => {
      player.rotateY(-movementX / 500);
      player.rotateX(-movementY / 500);
    });
  }
}
