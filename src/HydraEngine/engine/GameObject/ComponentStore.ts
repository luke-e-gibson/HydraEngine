import { IComponent, ComponentTypes } from "./component";


export class ComponentStore {
  private _components: IComponent[] = [];

  constructor(initComponents: IComponent[] = []) {
    this._components = initComponents;
  }

  public getComponent<T>(type: ComponentTypes): T | null {
    const component = this._components.find((component) => component.type === type);

    if (!component) {
      return null;
    }

    return component.data as T;
  }

  public contains(type: ComponentTypes): boolean {
    return this._components.some((component) => component.type === type);
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

}
