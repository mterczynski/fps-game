import { BoxGeometry, Color, FrontSide, Mesh, MeshBasicMaterial, PerspectiveCamera, Vector3 } from 'three';

export class Player extends Mesh {
  constructor(camera: PerspectiveCamera) {
    super();
    this.visible = false;
    this.add(camera);

    camera.position.set(0, 0, 0);
    camera.lookAt(new Vector3(0, 0, 0));
  }

  public moveForward(distance: number) {
    const rotationX = this.rotation.x;
    this.rotateX(-rotationX);
    this.translateZ(-distance);
    this.rotateX(rotationX);
  }

  public moveLeft(distance: number) {
    this.translateX(-distance);
  }

  public moveRight(distance: number) {
    this.translateX(distance);
  }

  public moveBack(distance: number) {
    const rotationX = this.rotation.x;
    this.rotateX(-rotationX);
    this.translateZ(distance);
    this.rotateX(rotationX);
  }
}
