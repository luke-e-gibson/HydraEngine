import { Sprite } from "@triton/object/Sprite";

export type ComponentTypes = "transform" | "sprite" | "camera" | "script";
export type ComponentDataTypes = ITransformComponent | ISpriteComponent | ICameraComponent

export interface IComponent {
  id?: string,
  type: ComponentTypes,
  data: ComponentDataTypes,
}
export interface ITransformComponent {
  position: [number, number, number], // X, Y, Z
  rotation: [number, number, number], // X, Y, Z (Euler angles)
  scale: [number, number, number], // X, Y, Z
}
export interface ISpriteComponent {
  textureLocation?: string, // URL to the texture
  offset?: [number, number], // X, Y
  color?: [number, number, number], // RGB
  sprite?: Sprite, // For game engine reference
}
export interface ICameraComponent {
  fov: number, // Field of view in degrees
  position: [number, number, number], // X, Y, Z
  rotation: [number, number, number], // X, Y, Z (Euler angles)
}

export interface IScriptComponent {
  scriptURL?: string, // URL to the script
  scriptData?: string, // Inline script data
  data?: any, // Additional data for the script
}

