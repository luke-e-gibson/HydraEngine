import { Triton } from "@triton/engine";
import { Sprite } from "@triton/object/Sprite";
import { IGame } from "./loader/game";
import { IScene } from "./loader/scene";
import { IObject } from "./loader/object";

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
    console.log(JSON.stringify(test, (key, value) => {
      if(value instanceof Map) {
        return {
          dataType: 'Map',
          value: Array.from(value.entries()), // or with spread: value: [...value]
        };
      } else {
        return value;
      }
    }, 2));

    const sprite = new Sprite("textures/f-texture.png")
    this.triton.addSprite("sprite", sprite);

    this.triton.renderFrame();
  }
}