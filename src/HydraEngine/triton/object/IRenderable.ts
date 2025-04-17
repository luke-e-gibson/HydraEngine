import { mat4 } from "gl-matrix";
import { Shader } from "@triton/shader/Shader";

export interface IRenderable {
  init(gl: WebGL2RenderingContext, shader: Shader): void;
  destroy(gl: WebGL2RenderingContext): void;
  render(cameraMatrix: mat4, viewMatrix: mat4, gl: WebGL2RenderingContext): void;
}