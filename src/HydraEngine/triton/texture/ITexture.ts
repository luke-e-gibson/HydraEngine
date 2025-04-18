export interface ITexture {
  init(gl: WebGL2RenderingContext): void;
  getTexture(): WebGLTexture | null;
  destroy(gl: WebGL2RenderingContext): void;
} 