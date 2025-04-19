import { ITexture } from "./ITexture";

let lastTextureUnit = 0;

const textureCache: Map<string, WebGLTexture> = new Map<string, WebGLTexture>();

export class ImageTexture implements ITexture {
  private imagePath: string;
  private texture: WebGLTexture | null = null;
  private textureUnit: number = lastTextureUnit;

  constructor(path: string) {
    this.imagePath = path;
  }

  public init(gl: WebGL2RenderingContext) {
    this.texture = gl.createTexture();
    if (!this.texture) throw new Error("[ X ] Texture creation failed");
    gl.bindTexture(gl.TEXTURE_2D, this.texture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([255, 0, 255, 255])
    );

    const image = new Image();
    image.src = this.imagePath;
    image.onload = () => {
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
      gl.activeTexture(this.textureUnit);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        gl.RGBA,
        gl.RGBA,
        gl.UNSIGNED_BYTE,
        image
      );
      gl.generateMipmap(gl.TEXTURE_2D);
      textureCache.set(this.imagePath, this.texture as WebGLTexture);
    };
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
