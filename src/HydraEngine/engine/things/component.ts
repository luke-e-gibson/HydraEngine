export type ComponentTypes = "transform" | "sprite" | "camera" | "script";

export interface IComponent {
  id?: string,
  type: ComponentTypes,
  data: ITransformComponent | ISpriteComponent | ICameraComponent,
}
export interface ITransformComponent {
  position: [number, number, number], // X, Y, Z
  rotation: [number, number, number], // X, Y, Z (Euler angles)
  scale: [number, number, number], // X, Y, Z
}
export interface ISpriteComponent {
  textureLocation: string, // URL to the texture
  offset?: [number, number], // X, Y
  color?: [number, number, number], // RGB
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