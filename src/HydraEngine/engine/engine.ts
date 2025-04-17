import { Triton } from "@triton/engine";
import { Sprite } from "@triton/object/Sprite";
import { IGame, loadGameData } from "./loader/game";
import { IScene } from "./loader/scene";
import { IObject } from "./loader/object";
import { serialize } from "@helpers/serialization";

interface HydraConfig {
  render: {
    render?: Triton;
    canvas?: HTMLCanvasElement;
    size?: {
      width: number;
      height: number;
    }

  }
}

export default class Hydra {
  private triton: Triton;
  private running: boolean = false;
  private game: IGame | null = null;
  private scene: IScene | null = null;

  constructor(config: HydraConfig) {
    if(config.render.render) {
      this.triton = config.render.render;
    }
    else {
      this.triton = new Triton({
        canvas: config.render.canvas,
      });
    }

    const test: IGame = {
      metadata: {
        id: "test",
        name: "Test",
        version: "1.0.0",
      },
      scenes: new Map<string, IScene>(),
      currentScene: "test",
    }

    const scene: IScene = {
      metadata: {
        name: "test",
        version: "1.0.0",
      },
      objects: new Map<string, IObject>(),
    }

    const object: IObject = {
      id: "test",
      name: "test",
      components: [],
    }

    scene.objects.set(object.id, object);
    test.scenes.set(scene.metadata.name, scene);

    console.log("Game: ", test);
    console.log(serialize(test, 2));

    const sprite = new Sprite("textures/f-texture.png")
    this.triton.addSprite("sprite", sprite);

    
  }

  private update() {
    if (!this.running) {
      this.triton.clear()
      return;
    };

    this.triton.renderFrame();

    requestAnimationFrame(this.update.bind(this));
  }

  public start() {
    this.running = true;
    this.update();
  }

  public stop() {
    this.running = false;
  }

  private loadScene() {
    if (!this.scene) {
      throw new Error("No scene loaded");
    }

    this.triton.clearRenderList();
    this.scene.objects.forEach((object) => {
      const sprite = new Sprite("textures/f-texture.png")
      this.triton.addSprite(object.name, sprite);
    });
  }

  public async loadGame(path: string) {
    const res = await fetch(path);
    const gameJson = await res.json();
    const gameData = loadGameData(gameJson);
    
    this.triton.clearRenderList();
    if(!gameData.currentScene) {
      console.warn("No current scene set in game data. Defaulting to first scene.");
      gameData.currentScene = Array.from(gameData.scenes.keys())[0];
    }

    this.scene = gameData.scenes.get(gameData.currentScene) as IScene;
    if (!this.scene) {
      throw new Error(`Scene ${gameData.currentScene} not found`);
    }
    this.loadScene();

    this.game = gameData;
  }
}