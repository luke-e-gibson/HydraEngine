import { Triton } from "@triton/engine";
import { Sprite } from "@triton/object/Sprite";
import { IGame, loadGameData } from "./game/game";
import { IScene } from "./game/scene";
import { GameObject, IObject } from "./GameObject/object";
import { IScriptComponent, ISpriteComponent, ITransformComponent } from "./GameObject/component";
import { serialize } from "@helpers/serialization";
import { ScriptComponent } from "./scripting/script";
import { Keyboard } from "./input/keyboard";
import { IGlobalScriptContext } from "./scripting/scriptContext";
import { Mouse } from "./input/mouse";

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
  //Internal
  private triton: Triton;
  private running: boolean = false;
  
  //Game
  private game: IGame | null = null;
  private scene: IScene | null = null;
  private objects: Map<string, GameObject> = new Map<string, GameObject>();

  //Input
  private keyboard: Keyboard;
  private mouse: Mouse;

  //Scripting
  private scriptContext: IGlobalScriptContext | null = null;

  constructor(config: HydraConfig) {
    if(config.render.render) {
      this.triton = config.render.render;
    }
    else {
      this.triton = new Triton({
        canvas: config.render.canvas,
      });
    }
    
    this.keyboard = new Keyboard();
    this.mouse = new Mouse(this.triton.Canvas);

    window.Hydra = this;
  }

  private update() {
    if (!this.running) {
      this.triton.clear()
      return;
    };

    if (!this.scene) {
      console.warn("No scene loaded. Cannot update.");
      return;
    }

    this.objects.forEach((object: GameObject) => {
      this.scriptContext = object.Update({
        keyboard: this.keyboard,
        mouse: this.mouse,
      }, {});
    })

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
    this.triton.setClearColor(this.scene.world.renderer.background[0], this.scene.world.renderer.background[1], this.scene.world.renderer.background[2])
    this.objects = new Map<string, GameObject>();

    this.scene.objects.forEach((object: IObject) => {
      const gObject = new GameObject(object);
      this.objects.set(object.name, gObject);

      if(!object.components) {
        console.warn(`Object ${object.name} has no components`);
        return;
      }

      object.components.forEach((component) => {
        switch (component.type) {
          case "sprite":
            const spriteComponentData = component.data as ISpriteComponent;
            let sprite: Sprite = null;
            if (!spriteComponentData.textureLocation) {
              sprite = new Sprite(spriteComponentData.textureLocation, [0,0,0]);
            } else if(spriteComponentData.color) {
              sprite = new Sprite(null, spriteComponentData.color);
            } else {
              console.error(`Sprite component for object ${object.name} is missing textureLocation or color.`);
              return;
            }

            const transform = gObject.getComponent<ITransformComponent>("transform");
            if (!transform) {
              console.error(`Transform component for object ${object.name} is missing or wrong.`);
              return;
            }
            const spriteReference = gObject.getComponent<ISpriteComponent>("sprite")
            if(!spriteReference) 
              return console.error(`Sprite component for object ${object.name} is missing or wrong.`);

            spriteReference.sprite = sprite;

            sprite.setPosition(transform.position[0], transform.position[1]);
            sprite.setSize(transform.scale[0], transform.scale[1]);

            this.triton.addSprite(object.name, sprite);
            break;
          case "script":
            const data = gObject.getComponent<IScriptComponent>("script")
            if(!data) {
              console.error(`Script component for object ${object.name} is missing or wrong.`);
              return;
            }
            const script = new ScriptComponent(object.name, data);
            gObject.scripts.attachScript(script);

            break;
          default:
            break;
        }
        this.scriptContext = gObject.Start({});
      });

    });
  }

  public saveGame() {
    if (!this.game) {
      throw new Error("No game loaded");
    }

    const gameData = this.game;
    const gameJson = serialize(gameData, 2);
    const blob = new Blob([gameJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "game.json";
    a.click();
    URL.revokeObjectURL(url);
    console.log("Game saved to game.json");
  }

  public loadGame(gameData: IGame) {
    this.triton.clearRenderList();

    window.document.title = `${gameData.metadata.name}: ${gameData.metadata.version}`;

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

  public async loadGameFromFile(path: string) {
    const res = await fetch(path);
    const gameJson = await res.text();   // load as text to get maps back
    const gameData = loadGameData(gameJson);
    
    this.triton.clearRenderList();

    window.document.title = `${gameData.metadata.name}: ${gameData.metadata.version}`;

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