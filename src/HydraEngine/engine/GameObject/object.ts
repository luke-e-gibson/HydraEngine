import {
  ComponentDataTypes,
  ComponentTypes,
  IComponent,
  ISpriteComponent,
  ITransformComponent,
} from "./component";
import { ComponentStore } from "./ComponentStore";
import { ScriptComponent } from "../scripting/script";
import { ScriptStore } from "@hydra/scripting/ScriptStore";
import { Keyboard } from "@hydra/input/keyboard";
import { IGlobalScriptContext, ILocalScriptContext } from "@hydra/scripting/scriptContext";
import { Mouse } from "@hydra/input/mouse";

export interface IObject {
  id: string;
  name: string;

  components: IComponent[];
}

export type GameObjectFlags = "hasSprite" | "hasTransform" | string;

export class GameObject {
  private _id: string;
  private _name: string;

  private _components: ComponentStore;
  private _attachedScripts: ScriptStore;
  private _localScriptContext: ILocalScriptContext = {};

  private flags: Map<GameObjectFlags, boolean> = new Map<
    GameObjectFlags,
    boolean
  >();

  constructor(object: IObject) {
    this._id = object.id;
    this._name = object.name;

    this._components = new ComponentStore(object.components);
    this._attachedScripts = new ScriptStore([]);

    this.flags.set("hasSprite", this._components.contains("sprite"));
    this.flags.set("hasTransform", this._components.contains("transform"));

    new Map<string, ScriptComponent>();
  }

  public Start(global: IGlobalScriptContext): { scriptContext: IGlobalScriptContext } {
    let localGlobal = global
    this._attachedScripts.scripts.forEach((script) => {
      const context = script.Start({
        gameObject: this,
        components: this._components,
        script: this._localScriptContext,
        global: localGlobal,
        input: {
          keyboard: null,
          mouse: null,
        },
      });
      if (context) {
        this._components = context.components;
        this._localScriptContext = context.script;
        localGlobal = context.global;
      }
    });
    return { scriptContext: localGlobal };
  }

  public Update(input: {keyboard: Keyboard, mouse: Mouse}, global: IGlobalScriptContext): { scriptContext: IGlobalScriptContext } {
    let localGlobal = global
    this._attachedScripts.scripts.forEach((script) => {
      const context = script.Update({
        gameObject: this,
        components: this._components,
        script: this._localScriptContext,
        global: localGlobal,
        input: {
          keyboard: input.keyboard,
          mouse: input.mouse,
        },
      });
      if (context) {
        this._components = context.components;
        this._localScriptContext = context.script;
        localGlobal = context.global; 
      }

      if(this.flags.get("hasSprite")) {
        this._components
        .getComponent<ISpriteComponent>("sprite")
        ?.sprite?.move(
          this._components.getComponent<ITransformComponent>("transform")
            ?.position[0] ?? 0,
          this._components.getComponent<ITransformComponent>("transform")
            ?.position[1] ?? 0
        );
      }
    });
    return { scriptContext: localGlobal };
  }

  public getComponent<T>(type: ComponentTypes): T | null {
    const component = this._components.getComponent<T>(type);
    if (!component) {
      console.warn(`Component of type ${type} not found`);
      return null;
    }
    return component;
  }

  public updateComponent<T>(
    type: ComponentTypes,
    data: ComponentDataTypes
  ): void {
    const component = this._components.getComponent<T>(type);
    if (!component) {
      console.warn(`Component of type ${type} not found`);
      return;
    }

    this._components.removeComponent(type);
    this._components.addComponent({ type, data });
  }

  public get scripts(): ScriptStore {
    return this._attachedScripts;
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}
