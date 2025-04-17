import { deserialize } from "@helpers/serialization";
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

export function loadGameData(game: string): IGame {
  const gameData = deserialize<IGame>(game);
  if (!gameData) {
    throw new Error("Failed to load game data");
  }

  if(!gameData.metadata){
    throw new Error("Game data does not contain metadata");
  }

  return gameData;
}