import { ComponentTypes, IComponent, ISpriteComponent } from "./component";

export interface IObject {
  id: string;
  name: string;

  components: IComponent[];
}

export class GameObject {
  private _id: string;
  private _name: string;

  private _components: IComponent[];

  constructor(object: IObject) {
    this._id = object.id;
    this._name = object.name;
    this._components = object.components || [];
  }

  public getComponent(type: ComponentTypes): IComponent | null {
    const component = this._components.find((component) => component.type === type);
    if (!component) {
      return null;
    }

    return component;
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