import { Shader } from "@triton/shader/Shader";

import vertexShaderSource from "./2D/base.vert?raw";
import fragmentShaderSource from "./2D/unlit/unlit.frag?raw";

export function unlitShader(gl: WebGL2RenderingContext): Shader {
  const shader = new Shader(gl, vertexShaderSource, fragmentShaderSource);
  if(!shader) throw new Error("Shader creation failed");
  return shader;
}