import { degToRad } from "@hydra/math";
import { mat4, quat, vec3 } from "gl-matrix";

export interface CameraConfig {
  fov: number;
  size: {
    width: number;
    height: number;
  }
}

export class Camera {
  private config: CameraConfig;
  private _projectionMatrix: mat4;
  private _viewMatrix: mat4;
  private position: vec3;
  private rotation: quat; // Store rotation as quaternion
  private up: vec3;
  private forward: vec3;
  private right: vec3;

  constructor(config: CameraConfig) {
    this.config = config;
    this._projectionMatrix = mat4.create();
    this._viewMatrix = mat4.create();
    
    this.position = vec3.fromValues(0, 0, 5);
    this.rotation = quat.create();
    this.up = vec3.fromValues(0, 1, 0);
    this.forward = vec3.fromValues(0, 0, -1);
    this.right = vec3.fromValues(1, 0, 0);
    

    void this.updateProjectionMatrix();
    void this.updateViewMatrix();
  }

  public updateProjectionMatrix() {
    const aspect = this.config.size.width / this.config.size.height;
    mat4.perspective(this._projectionMatrix, this.config.fov, aspect, 0.1, 1000);
  }

  public updateViewMatrix() {
    // Calculate the look-at point based on position and forward direction
    const center = vec3.create();
    vec3.add(center, this.position, this.forward);
    
    mat4.lookAt(this._viewMatrix, this.position, center, this.up);
  }

  // Set position directly (Unity-like)
  public setPosition(position: vec3) {
    vec3.copy(this.position, position);
    this.updateViewMatrix();
  }

  // Get the current position
  public getPosition(): vec3 {
    return vec3.clone(this.position);
  }

  // Set rotation using Euler angles in degrees (Unity-like)
  public setRotation(eulerAngles: vec3) {
    // Convert Euler angles (in degrees) to quaternion
    const radX = degToRad(eulerAngles[0]);
    const radY = degToRad(eulerAngles[1]);
    const radZ = degToRad(eulerAngles[2]);
    
    quat.fromEuler(this.rotation, radX, radY, radZ);
    
    // Update forward, right, and up vectors based on rotation
    vec3.set(this.forward, 0, 0, -1);
    vec3.transformQuat(this.forward, this.forward, this.rotation);
    vec3.normalize(this.forward, this.forward);
    
    vec3.set(this.right, 1, 0, 0);
    vec3.transformQuat(this.right, this.right, this.rotation);
    vec3.normalize(this.right, this.right);
    
    vec3.set(this.up, 0, 1, 0);
    vec3.transformQuat(this.up, this.up, this.rotation);
    vec3.normalize(this.up, this.up);
    
    this.updateViewMatrix();
  }

  // Translate the camera position (Unity-like)
  public translate(translation: vec3) {
    vec3.add(this.position, this.position, translation);
    this.updateViewMatrix();
  }

  public get projectionMatrix(): mat4 {
    return this._projectionMatrix;
  }

  public get viewMatrix(): mat4 {
    return this._viewMatrix;
  }

}