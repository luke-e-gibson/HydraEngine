import { Camera } from "./camera/Camera";
import { Sprite } from "./object/Sprite";
import { Shader } from "./shader/Shader";
import { unlitShader } from "./shader/shaders/shaders";

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

  private shader: Map<string, Shader> = new Map<string, Shader>();

  private renderList: Map<string, Sprite> = new Map<string, Sprite>();
  private camera: Camera;

  constructor(config: TritonConfig) {
    this.state = this.getDefaultState();
    this.updateState("starting", "Triton is starting...");
    this.canvas = config.canvas || document.createElement("canvas");
    if (config.size) {
      this.canvas.width = this.canvas.getBoundingClientRect().width;
      this.canvas.height = this.canvas.getBoundingClientRect().height;
    } else {
      // If no size is provided we use fullscreen
      //Inject window css
      const style = document.createElement("style");
      style.innerHTML = `
        html, body {
          margin: 0;
          padding: 0;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }
      `;
      document.head.appendChild(style);

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
    this.canvas.width = this.canvas.getBoundingClientRect().width;
    this.canvas.height = this.canvas.getBoundingClientRect().height;
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.camera = new Camera({
      fov: 45,
      size: {
        width: this.canvas.width,
        height: this.canvas.height,
      },
    })
  }

  private glConfig() {
    this.gl.clearColor(0.0, 0.0, 0.0, 1.0);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    this.gl.enable(this.gl.DEPTH_TEST);
    this.gl.depthFunc(this.gl.LEQUAL);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    this.compileShaders();
  }

  private compileShaders() {
    this.shader.set("unlit", unlitShader(this.gl));
  }

  public addSprite(name: string, sprite: Sprite) {
    if (this.renderList.has(name)) {
      console.warn(`Sprite with name ${name} already exists. Overwriting.`);
    }
    this.renderList.set(name, sprite);
    sprite.init(this.gl, this.shader.get("unlit") as Shader);
  }

  public removeSprite(name: string) {
    if (this.renderList.has(name)) {
      this.renderList.get(name)?.destroy(this.gl);
      this.renderList.delete(name);
    } else {
      console.warn(`Sprite with name ${name} does not exist.`);
    }
  }
  
  public getSprite(name: string): Sprite | undefined {
    return this.renderList.get(name);
  }

  public setClearColor(r: number, g: number, b: number, a: number = 1) {
    this.gl.clearColor(r, g, b, a);
    this.renderFrame();
  }

  public clearRenderList() {
    this.renderList.forEach((sprite) => {
      sprite.destroy(this.gl);
    });
    this.renderList.clear();
  }

  public renderFrame() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    
    this.renderList.forEach((sprite) => {
      sprite.render(this.camera.projectionMatrix, this.camera.viewMatrix, this.gl);
    });

  }

  public clear() {
    this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
  }

}