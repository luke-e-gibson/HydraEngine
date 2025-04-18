import { ScriptComponent } from "./script";
import { IScriptContext } from "./scriptContext";

export class ScriptStore {
  private _scripts: Map<string, ScriptComponent> = new Map<string, ScriptComponent>();

  constructor(scripts: ScriptComponent[]) {
    scripts.forEach((script) => {
      this._scripts.set(script.name, script);
    });
  }

  public attachScript(script: ScriptComponent): void {
    if (this._scripts.has(script.name)) {
      throw new Error(`Script with ID ${script.name} is already attached`);
    }
    this._scripts.set(script.name, script);
  }

  public detachScript(scriptId: string): void {
    if (!this._scripts.has(scriptId)) {
      throw new Error(`Script with ID ${scriptId} is not attached`);
    }
    this._scripts.delete(scriptId);
  }

  public getScripts(): ScriptComponent[] {
    return Array.from(this._scripts.values());
  }

  public get scripts(): Map<string, ScriptComponent> {
    return this._scripts;
  }
}