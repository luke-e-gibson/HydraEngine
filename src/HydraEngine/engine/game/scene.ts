import { IObject } from "../GameObject/object";

export interface IScene {
  metadata: {
    name: string;
    version: string;
  }

  world: {
    renderer: {
      background: [number, number, number];
    }
  }

  objects: Map<string, IObject>;
}