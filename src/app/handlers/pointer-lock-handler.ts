export class PointerLockHandler {
  public init(canvas: HTMLCanvasElement) {
    window.addEventListener('focus', (e) => {
      canvas.requestPointerLock();
    });

    window.addEventListener('load', (e) => {
      canvas.requestPointerLock();
    });

    window.addEventListener('click', (e) => {
      canvas.requestPointerLock();
    });
  }
}
