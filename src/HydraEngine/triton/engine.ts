import { Camera } from "./camera/Camera";
import { Sprite } from "./object/Sprite";

interface TritonConfig {
  canvas?: HTMLCanvasElement;
  size?: {
    width: number;
    height: number;
  }, 
}

type State = "running" | "idle" | "stopped" | "error" | "starting"

interface TritonState {
  state: State
  log: string[],
}

export class Triton {
  private canvas: HTMLCanvasElement;
  private gl: WebGL2RenderingContext;
  private state: TritonState;

  private renderList: Map<string, Sprite> = new Map<string, Sprite>();
  private camera: Camera;

  constructor(config: TritonConfig) {
    this.state = this.getDefaultState();
    this.updateState("starting", "Triton is starting...");
    this.canvas = config.canvas || document.createElement("canvas");
    if (config.size) {
      this.canvas.width = config.size.width;
      this.canvas.height = config.size.height;
    } else {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      window.onresize = () => this.handleResize();
    }
    if (!document.body.contains(this.canvas)) {
      document.body.appendChild(this.canvas);
    }
    
    this.gl = this.canvas.getContext("webgl2") as WebGL2RenderingContext;
    if (!this.gl) {
      this.updateState("error", "WebGL2 not supported");
      throw new Error("WebGL2 not supported");
    }
    this.glConfig();

    this.camera = new Camera({
      fov: 45,
      size: {
        width: this.canvas.width,
        height: this.canvas.height,
      },
    })


    this.updateState("running", "Triton started successfully");
  }

  public get State(): TritonState { return this.state; }
  public get Canvas(): HTMLCanvasElement { return this.canvas; }
  
  private getDefaultState(): TritonState {
    return {
      state: "idle",
      log: [],
    };
  }

  private updateState(state: State, log: string) {
    this.state.state = state;
    this.state.log.push(log);
  }

  private handleResize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }

  private glConfig() {
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  public renderFrame() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    
    this.renderList.forEach((sprite) => {
      sprite.render(this.camera.projectionMatrix, this.camera.viewMatrix, this.gl);
    });

  }

}