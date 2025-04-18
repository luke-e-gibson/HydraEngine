export class Keyboard {
  private keys: Map<string, boolean> = new Map<string, boolean>();
  private keyDown: Map<string, boolean> = new Map<string, boolean>();
  private keyUp: Map<string, boolean> = new Map<string, boolean>();

  constructor() {
    window.addEventListener("keydown", (event) => {
      this.keys.set(event.code, true);
      this.keyDown.set(event.code, true);
    });

    window.addEventListener("keyup", (event) => {
      this.keys.set(event.code, false);
      this.keyUp.set(event.code, true);
    });
  }

  public isKeyDown(key: string): boolean {
    return this.keys.get(key) || false;
  }

  public isKeyUp(key: string): boolean {
    return this.keyUp.get(key) || false;
  }

  public isKeyPressed(key: string): boolean {
    const pressed = this.keyDown.get(key) || false;
    if (pressed) {
      this.keyDown.set(key, false);
    }
    return pressed;
  }
}