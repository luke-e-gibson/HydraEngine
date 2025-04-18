import { ITexture } from "./ITexture";

let lastTextureUnit = 0;

const textureCache: Map<string, WebGLTexture> = new Map<string, WebGLTexture>();

export class SolidTexture implements ITexture {
  private texture: WebGLTexture | null = null;
  private color: [number, number, number] = [0, 0, 0];


  constructor(color: [number, number, number]) {
    this.color = color;
  }

  public init(gl: WebGL2RenderingContext) {    
    
    this.texture = gl.createTexture();
    if (!this.texture) throw new Error("[ X ] Texture creation failed");
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([this.color[0], this.color[2], this.color[2], 255]));
  }

  public getTexture(): WebGLTexture | null {
    return this.texture;
  }

  public destroy(gl: WebGL2RenderingContext): void {
    if (this.texture) {
      gl.deleteTexture(this.texture);
      this.texture = null;
    }
  }

}