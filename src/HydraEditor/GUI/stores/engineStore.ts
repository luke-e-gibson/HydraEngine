import Hydra from "@hydra/engine";
import { GameObject } from "@hydra/GameObject/object";
import { create } from "zustand";

type EngineState = {
  engine: Hydra | null;
  gameObject: GameObject | null;
};

type EngineActions = {
  createEngine: (canvas: HTMLCanvasElement) => void;
};

export const useEngineStore = create<EngineState & EngineActions>((set) => ({
  engine: null,
  gameObject: null,
  createEngine: (canvas: HTMLCanvasElement) => {
    console.log("Creating engine with canvas", canvas);
    set((state) => ({ engine: new Hydra({ render: { canvas } }) }))
  },
}));
