import { IScene } from "./scene";

export interface IGame {
  metadata: {
    id: string;
    name: string;
    version: string;
  }

  scenes: Map<string, IScene>;
  currentScene: string;
}