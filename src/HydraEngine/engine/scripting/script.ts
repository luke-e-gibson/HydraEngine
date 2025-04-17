import { IScriptComponent } from "../things/component";
import { ScriptContext } from "./scriptContext";

export class ScriptComponent {
  private _name: string;
  private _scriptFunctions: Map<string, Function> = new Map<string, Function>();


  constructor(name: string, scriptData: IScriptComponent) {
    this._name = name;

    if (scriptData.scriptURL) {
      throw new Error("Script URL is not supported yet.");
    } else if (scriptData.scriptData) {
      const functions = this.loadScriptFunctions(scriptData.scriptData);
      if(!functions) {
        throw new Error("Failed to load script functions.");
      }
      this._scriptFunctions = functions;
    } else {
      throw new Error("No script data provided.");
    }
  }

  private loadScriptFunctions(scriptData: string) {
    try {
      const wrappedScript = `
        ${scriptData}
        return exports;  
      `

      const factory = new Function(wrappedScript);
      const exports = factory();
      
      const exportedFunctions: Map<string, Function> = new Map<string, Function>();

      for(const key in exports) {
        if (typeof exports[key] === "function") {
          if(exportedFunctions.has(key)) {
            console.warn(`Function ${key} is already defined. Overwriting.`);
          }
          exportedFunctions.set(key, exports[key]);
        } else {
          console.warn(`Exported value ${key} is not a function.`);
        }
      }

      return exportedFunctions;

    }catch (error) {
      console.error("Error loading script functions:", error);
    }
  }
  
  public Start(): void {
    this._scriptFunctions.get("Start")?.call({ ...ScriptContext });
  }

  public get name(): string {
    return this._name;
  }
}
