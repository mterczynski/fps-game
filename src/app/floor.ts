import { Color, Mesh, MeshBasicMaterial, PlaneGeometry } from 'three';

export class Floor extends Mesh {
  constructor() {
    super();
    this.geometry = new PlaneGeometry(100, 200);
    this.material = new MeshBasicMaterial({ color: new Color('rgb(170, 97, 44)') });

    this.rotateX(- Math.PI / 2);
  }
}
