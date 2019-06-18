import { BackSide, BoxGeometry, Color, FrontSide, Mesh, MeshBasicMaterial, PerspectiveCamera, Vector3 } from 'three';

export class Player extends Mesh {
  constructor(camera: PerspectiveCamera) {
    super();
    this.geometry = new BoxGeometry(10, 10, 10);
    this.material = new MeshBasicMaterial({
      color: new Color('rgb(255, 0, 0)'),
      side: FrontSide,
    });
    this.visible = false;
    this.add(camera);

    camera.position.set(0, 0, 0);
    camera.lookAt(new Vector3(0, 0, 0));
  }

  public moveForward(distance: number) {
    this.translateZ(-distance);
  }

  public moveLeft(distance: number) {
    this.translateX(-distance);
  }

  public moveRight(distance: number) {
    this.translateX(distance);
  }

  public moveBack(distance: number) {
    this.translateZ(distance);
  }

  public rotate(degrees: number) {
    this.rotateY(degrees);
  }
}
