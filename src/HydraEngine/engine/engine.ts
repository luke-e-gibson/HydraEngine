import { Triton } from "@triton/engine";
import { Sprite } from "@triton/object/Sprite";
import { IGame, loadGameData } from "./things/game";
import { IScene } from "./things/scene";
import { IObject } from "./things/object";
import { ISpriteComponent } from "./things/component";

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
  private objects: Map<string, Object> = new Map<string, Sprite>();

  constructor(config: HydraConfig) {
    if(config.render.render) {
      this.triton = config.render.render;
    }
    else {
      this.triton = new Triton({
        canvas: config.render.canvas,
      });
    }
    
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
    this.objects = new Map<string, Sprite>();

    this.scene.objects.forEach((object: IObject) => {
      const gObject = new Object(object);
      this.objects.set(object.name, gObject);

      if(!object.components) {
        console.warn(`Object ${object.name} has no components`);
        return;
      }

      object.components.forEach((component) => {
        if (component.type === "sprite") {
          const spriteComponentData = component.data as ISpriteComponent;
          if (!spriteComponentData.textureLocation) {
            console.warn(`Sprite component for object ${object.name} has no path. Also object data might be missing or wrong.`);
            return;
          }
          const sprite = new Sprite(spriteComponentData.textureLocation);
          this.triton.addSprite(object.name, sprite);
        }
      });

    });
  }

  public async loadGame(path: string) {
    const res = await fetch(path);
    const gameJson = await res.text();   // load as text to get maps back
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