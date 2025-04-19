import { mat4, vec3 } from "gl-matrix";
import { IRenderable } from "./IRenderable";
import { Shader } from "@triton/shader/Shader";
import { ImageTexture } from "../texture/imageTexture";
import { CONSTS } from "./consts";
import { SolidTexture } from "@triton/texture/solidTexture";
import { ITexture } from "@triton/texture/ITexture";

export class Sprite implements IRenderable {
  private vertexBuffer: WebGLBuffer | null = null;
  private indexBuffer: WebGLBuffer | null = null;
  private textureCoordBuffer: WebGLBuffer | null = null;
  
  private modelMatrix: mat4 | null = null;
  
  private shader: Shader | null = null;
  private texture: ITexture | null = null;
  private color: [number, number, number] = [1, 1, 1];
  
  private position: number[] = [0, 0];
  private size: number[] = [0, 0];
  private rotation: number = 0; // Rotation in degrees

  constructor(path: string | null, color: [number, number, number] = [1, 1, 1]) {
    if(path !== null) {
      this.texture = new ImageTexture(path);
    }else {

      this.texture = new SolidTexture(color);
      this.color = color;
    }
  }

  public move(x: number, y: number): void {
    if (!this.modelMatrix) return;
    this.modelMatrix = mat4.translate(this.modelMatrix, mat4.create(), [x, y, 0]);
  }

  public init(gl: WebGL2RenderingContext, shader: Shader): void {
        // Create and bind the vertex buffer
        this.vertexBuffer = gl.createBuffer();
        if (!this.vertexBuffer) throw new Error("Vertex buffer creation failed");
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(CONSTS.shapes.Square.vertices), gl.STATIC_DRAW);
    
        // Create and bind the index buffer
        this.indexBuffer = gl.createBuffer();
        if (!this.indexBuffer) throw new Error("Index buffer creation failed");
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(CONSTS.shapes.Square.indices), gl.STATIC_DRAW);

        this.textureCoordBuffer = gl.createBuffer();
        if (!this.textureCoordBuffer) throw new Error("Texture coordinate buffer creation failed");
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(CONSTS.shapes.Square.texCords), gl.STATIC_DRAW);
    
        // Unbind the buffers
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    
        this.shader = shader
        if (!this.shader) throw new Error("Shader creation failed");
        
        if(!this.texture) throw new Error("Texture creation failed");
        this.texture.init(gl)

        this.modelMatrix = mat4.fromTranslation(mat4.create(), vec3.fromValues(this.position[0], this.position[1], 0));
        console.log(this.texture)
  }

  public destroy(gl: WebGL2RenderingContext): void {
    gl.deleteBuffer(this.vertexBuffer as WebGLBuffer);
    gl.deleteBuffer(this.indexBuffer as WebGLBuffer);
     this.vertexBuffer = null;
    this.indexBuffer = null;
    this.modelMatrix = null;
    this.shader = null;
  }

  public setPosition(x: number, y: number): void {
    this.position = [x, y];
    this.updateModelMatrix();
  }

  public setSize(width: number, height: number): void {
    this.size = [width, height];
    this.updateModelMatrix();
  }

  public setRotation(angle: number): void {
    this.rotation = angle;
    this.updateModelMatrix();
  }

  private updateModelMatrix(): void {
    if (!this.modelMatrix) return;
    this.modelMatrix = mat4.fromTranslation(mat4.create(), vec3.fromValues(this.position[0], this.position[1], 0));
    this.modelMatrix = mat4.rotateZ(this.modelMatrix, this.modelMatrix, this.rotation * Math.PI / 180);
    this.modelMatrix = mat4.scale(this.modelMatrix, this.modelMatrix, vec3.fromValues(this.size[0], this.size[1], 1));
  }

  public render(cameraMatrix: mat4, viewMatrix: mat4, gl: WebGL2RenderingContext): void {
      if (!this.vertexBuffer || !this.indexBuffer || !this.modelMatrix || !this.texture) return;
    
        // Use the shader program
        if(!this.shader) return;
        this.shader.use();
        
        // Bind the vertex buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);
        const positionLocation = this.shader.getAttribLocation(Shader.VOCABULARY.attribute.position); 
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 4, gl.FLOAT, false, 0, 0);

        // Bind the texture coordinate buffer
        gl.bindBuffer(gl.ARRAY_BUFFER, this.textureCoordBuffer);
        const texCoordLocation = this.shader.getAttribLocation(Shader.VOCABULARY.attribute.texture);
        gl.enableVertexAttribArray(texCoordLocation);
        gl.vertexAttribPointer(texCoordLocation, 2, gl.FLOAT, false, 0, 0);
        
        this.shader.setMatrix(cameraMatrix, viewMatrix, this.modelMatrix);
        
        if(!this.texture) {
          this.shader.setColor(this.color);
        } else {
          this.shader.setTexture(this.texture);
        }
        // Bind the index buffer
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
    
        // Draw the square
        gl.drawElements(gl.TRIANGLES, CONSTS.shapes.Square.indices.length, gl.UNSIGNED_SHORT, 0);
    
        // Unbind the buffers
        gl.bindBuffer(gl.ARRAY_BUFFER, null);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);

  }
}