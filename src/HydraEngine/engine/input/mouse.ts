export interface IMousePosition {
  x: number;
  y: number;
  delta: {
    x: number;
    y: number;
  },
}

export class Mouse {
  private mouseDown: boolean 
  private mouseUp: boolean 
  private mouseMove: boolean 
  private mouseWheel: boolean
  private wheelDelta: number
  private position: IMousePosition 

  constructor(canvas: HTMLCanvasElement) {
    this.position = {
      x: 0,
      y: 0,
      delta: {
        x: 0,
        y: 0,
      },
    };
    this.mouseDown = false;
    this.mouseUp = false;
    this.mouseMove = false;
    this.mouseWheel = false;
    this.wheelDelta = 0;

    window.addEventListener("mousedown", (event) => {
      this.mouseDown = true;
      this.mouseUp = false;
    });
    window.addEventListener("mouseup", (event) => {
      this.mouseUp = true;
      this.mouseDown = false;
    })
    window.addEventListener("mousemove", (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      this.mouseMove = true;
      this.position.delta.x = x - this.position.x;
      this.position.delta.y = y - this.position.y;
      this.position.x = x;
      this.position.y = y;
    })
    window.addEventListener("wheel", (event) => {
      this.mouseWheel = true;
      this.wheelDelta = event.deltaY;
    })
  }

  public isMouseDown(): boolean {
    return this.mouseDown;
  }
  
  public isMouseUp(): boolean {
    return this.mouseUp;
  }

  public getMousePosition(): IMousePosition {
    return this.position;
  }
}