import { IScriptComponent } from "../GameObject/component";
import { IScriptContext } from "./scriptContext";

export class ScriptComponent {
  private _name: string;
  private _scriptFunctions: Map<string, Function> = new Map<string, Function>();
  private _scriptContext: IScriptContext | null = null;
  private _flags: Map<string, boolean> = new Map<string, boolean>();

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
        with(this) {
          ${scriptData}
          return exports;  
        }
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
  
  public updateGameContext(context: IScriptContext): void {
    this._scriptContext = context;
    console.log("Script context updated:", this._scriptContext);
  }

  public Start(context: IScriptContext): IScriptContext | void {
    const contextReturn: IScriptContext = this._scriptFunctions.get("Start")?.call({ ...context });
    if (contextReturn) {
      return contextReturn;
    } else {
      console.warn("Start function not found or did not return a context.");
    }
  }

  public Update(context: IScriptContext): IScriptContext | void {
    const contextReturn: IScriptContext = this._scriptFunctions.get("Update")?.call({ ...context });
    if (contextReturn) {
      return contextReturn;
    } else {
      if(this._flags.get("UpdateWarn")) return
      console.warn("Update function not found or did not return a context.");
      this._flags.set("UpdateWarn", true);
    }
  }

  public get name(): string {
    return this._name;
  }
}
