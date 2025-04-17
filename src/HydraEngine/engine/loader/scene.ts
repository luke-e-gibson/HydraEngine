import { IObject } from "./object";

export interface IScene {
  metadata: {
    name: string;
    version: string;
  }

  objects: Map<string, IObject>;
}