import { ComponentStore } from "@hydra/GameObject/ComponentStore";
import { GameObject } from "@hydra/GameObject/object";

export interface IScriptContext {
  components: ComponentStore;
  gameObject: GameObject;
}