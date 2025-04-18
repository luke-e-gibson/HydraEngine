import { ComponentStore } from "@hydra/GameObject/ComponentStore";
import { GameObject } from "@hydra/GameObject/object";
import { Keyboard } from "@hydra/input/keyboard";

export interface IScriptContext {
  components: ComponentStore;
  gameObject: GameObject;
  input: {
    keyboard: Keyboard;
  };
}
