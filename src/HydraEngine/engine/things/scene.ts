import { IObject } from "../GameObject/object";

export interface IScene {
  metadata: {
    name: string;
    version: string;
  }

  objects: Map<string, IObject>;
}