import { Triton } from "@triton/engine";
import { Sprite } from "@triton/object/Sprite";

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

    const sprite = new Sprite("textures/f-texture.png")
    this.triton.addSprite("sprite", sprite);

    this.triton.renderFrame();
  }
}