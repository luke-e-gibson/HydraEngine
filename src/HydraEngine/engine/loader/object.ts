import { IComponent } from "./component";

export interface IObject {
  id: string;
  name: string;

  components: IComponent[];
}