import { ComponentTypes, IComponent, IScriptComponent } from "./component";
import { ScriptComponent } from "../scripting/script";

export interface IObject {
  id: string;
  name: string;

  components: IComponent[];
}

export class GameObject {
  private _id: string;
  private _name: string;

  private _components: IComponent[];
  private _attachedScripts: Map<string, ScriptComponent>;

  constructor(object: IObject) {
    this._id = object.id;
    this._name = object.name;
    
    this._components = object.components || [];
    this._attachedScripts = new Map<string, ScriptComponent>();
  }

  public getComponent<T>(type: ComponentTypes): T | null {
    const component = this._components.find((component) => component.type === type);

    if (!component) {
      return null;
    }

    return component.data as T;
  }

  public attachScript(script: ScriptComponent): void {
    if (this._attachedScripts.has(script.name)) {
      throw new Error(`Script with ID ${script.name} is already attached`);
    }
    this._attachedScripts.set(script.name, script);
  }

  public detachScript(scriptId: string): void {
    if (!this._attachedScripts.has(scriptId)) {
      throw new Error(`Script with ID ${scriptId} is not attached`);
    }
    this._attachedScripts.delete(scriptId);
  }

  public getScripts(): ScriptComponent[] {
    return Array.from(this._attachedScripts.values());
  }

  public getComponents(type: ComponentTypes): IComponent[] {
    return this._components.filter((component) => component.type === type);
  }

  public addComponent(component: IComponent): void {
    if (this._components.find((c) => c.type === component.type)) {
      throw new Error(`Component of type ${component.type} already exists`);
    }
    this._components.push(component);
  }

  public removeComponent(type: ComponentTypes): void {
    const index = this._components.findIndex((component) => component.type === type);
    if (index === -1) {
      throw new Error(`Component of type ${type} does not exist`);
    }
    this._components.splice(index, 1);
  }

  public get id(): string {
    return this._id;
  }

  public get name(): string {
    return this._name;
  }
}