import { ComponentStore } from "@hydra/GameObject/ComponentStore";
import { GameObject } from "@hydra/GameObject/object";
import { Keyboard } from "@hydra/input/keyboard";
import { Mouse } from "@hydra/input/mouse";


export type ILocalScriptContext = Object

export type IGlobalScriptContext = Object

export interface IScriptContext {
  components: ComponentStore;
  gameObject: GameObject;
  script: ILocalScriptContext
  global: IGlobalScriptContext;
  input: {
    keyboard: Keyboard;
    mouse: Mouse;
  };
}
