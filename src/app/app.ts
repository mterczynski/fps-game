import {
  Color,
  PerspectiveCamera,
  PointLight,
  Scene,
  WebGLRenderer,
} from 'three';
import { Floor } from './floor';
import {
  MouseMoveHandler,
  PointerLockHandler,
  PressedKeysHandler,
} from './handlers';
import { Player } from './player';

const canvas = document.getElementById('main-canvas') as HTMLCanvasElement;

export class App {
  private readonly scene = new Scene();
  private readonly camera = new PerspectiveCamera(
    45,
    innerWidth / innerHeight,
    0.1,
    10000,
  );
  private readonly renderer = new WebGLRenderer({
    antialias: true,
    canvas,
  });

  private light = new PointLight(new Color('rgb(255, 255, 255)'), 1);

  // private readonly controls = new OrbitControls(this.camera, this.renderer.domElement);

  private readonly pressedKeysHandler = new PressedKeysHandler();
  private readonly mouseMoveHandler = new MouseMoveHandler();
  private readonly pointerLockHandler = new PointerLockHandler();

  private floor: Floor = new Floor();
  private player: Player = new Player(this.camera);
  private lastTick: number = Date.now();

  constructor() {
    this.scene.add(this.floor);
    this.scene.add(this.player);

    this.pressedKeysHandler.init();
    this.mouseMoveHandler.init(this.player);
    this.pointerLockHandler.init(canvas);

    this.light.position.set(0, 500, 0);

    this.scene.add(this.light);

    this.player.position.set(-45, 5, -95);

    this.renderer.setSize(innerWidth, innerHeight);
    this.renderer.setClearColor(new Color('rgb(0,0,0)'));

    this.render();
  }

  private handlePlayerMovements(delta: number) {
    const pressedKeys = this.pressedKeysHandler.getPressedKeys();
    const playerSpeed = (40 * delta) / 1000;

    if (pressedKeys.a) {
      this.player.moveLeft(playerSpeed);
    }
    if (pressedKeys.d) {
      this.player.moveRight(playerSpeed);
    }
    if (pressedKeys.w) {
      this.player.moveForward(playerSpeed);
    }
    if (pressedKeys.s) {
      this.player.moveBack(playerSpeed);
    }
  }

  private adjustCanvasSize() {
    this.renderer.setSize(innerWidth, innerHeight);
    this.camera.aspect = innerWidth / innerHeight;
    this.camera.updateProjectionMatrix();
  }

  private render() {
    const delta = Date.now() - this.lastTick;

    this.handlePlayerMovements(delta);

    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(() => this.render());

    this.adjustCanvasSize();

    this.lastTick = Date.now();
  }
}
