import { ImageTexture } from "@triton/texture/imageTexture";
import { ITexture } from "@triton/texture/ITexture";
import { mat4 } from "gl-matrix";

export class Shader {
  public static readonly VOCABULARY = {
    attribute: {
      position: "a_position",
      texture: "a_texCoord",
    },
    uniform: {
      projectionMatrix: "u_projectionMatrix",
      viewMatrix: "u_viewMatrix",
      modelMatrix: "u_modelMatrix",
      color: "u_color",
      texture: "u_texture",
      useTexture: "u_useTexture",
    },
  }

  private gl: WebGLRenderingContext;
  private program: WebGLProgram;

  constructor(gl: WebGLRenderingContext, vertexShaderSource: string, fragmentShaderSource: string) {
    this.gl = gl;
    this.program = this.createProgram(vertexShaderSource, fragmentShaderSource);
  }

  private createShader(type: number, source: string): WebGLShader {
    const shader = this.gl.createShader(type);
    if (!shader) throw new Error("Shader creation failed");
    this.gl.shaderSource(shader, source);
    this.gl.compileShader(shader);

    const success = this.gl.getShaderParameter(shader, this.gl.COMPILE_STATUS);
    if (!success) {
      const error = this.gl.getShaderInfoLog(shader);
      this.gl.deleteShader(shader);
      throw new Error(`Shader compilation failed: ${error}`);
    }
    return shader;
  }

  private createProgram(vertexShaderSource: string, fragmentShaderSource: string): WebGLProgram {
    const vertexShader = this.createShader(this.gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = this.createShader(this.gl.FRAGMENT_SHADER, fragmentShaderSource);

    const program = this.gl.createProgram();
    if (!program) throw new Error("Program creation failed");
    this.gl.attachShader(program, vertexShader);
    this.gl.attachShader(program, fragmentShader);
    this.gl.linkProgram(program);

    const success = this.gl.getProgramParameter(program, this.gl.LINK_STATUS);
    if (!success) {
      const error = this.gl.getProgramInfoLog(program);
      throw new Error(`Program linking failed: ${error}`);
    }
    
    return program;
  }

  public use(): void {
    this.gl.useProgram(this.program);
  }

  public setMatrix(projectionMatrix: mat4, viewMatrix: mat4, modelMatrix: mat4): void {
    this.gl.uniformMatrix4fv(this.getUniformLocation(Shader.VOCABULARY.uniform.projectionMatrix), false, projectionMatrix);
    this.gl.uniformMatrix4fv(this.getUniformLocation(Shader.VOCABULARY.uniform.viewMatrix), false, viewMatrix);
    this.gl.uniformMatrix4fv(this.getUniformLocation(Shader.VOCABULARY.uniform.modelMatrix), false, modelMatrix);
  }

  public setTexture(texture: ITexture): void {
    this.gl.uniform1i(this.getUniformLocation(Shader.VOCABULARY.uniform.useTexture), 1);
    this.gl.bindTexture(this.gl.TEXTURE_2D, texture.getTexture());
  }

  public setColor(color: number[]): void {
    this.gl.uniform1i(this.getUniformLocation(Shader.VOCABULARY.uniform.useTexture), 0);
    this.gl.uniform4f(this.getUniformLocation(Shader.VOCABULARY.uniform.color), color[0], color[1], color[2], color[3]);
  }

  public getAttribLocation(name: string): number {
    const location = this.gl.getAttribLocation(this.program, name);
    if (location === -1) {
      throw new Error(`Attribute ${name} not found`);
    }
    return location;
  }

  public getUniformLocation(name: string): WebGLUniformLocation | null {
    return this.gl.getUniformLocation(this.program, name);
  }
}