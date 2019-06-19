import { Mesh, MeshPhongMaterial, PlaneGeometry, TextureLoader } from 'three';

const texture = new TextureLoader().load( './../../assets/textures/frozen-lake.png' );
const material = new MeshPhongMaterial( { map: texture } );

export class Floor extends Mesh {
  constructor() {
    super();
    this.geometry = new PlaneGeometry(100, 200);
    this.material = material;

    this.rotateX(- Math.PI / 2);
  }
}
