import Hydra from "@hydra/engine";
import { GameObject } from "@hydra/GameObject/object";
import { create } from "zustand";

type EngineState = {
  engine: Hydra | null;
  hasLoaded: boolean;
  selectedIndex: number | null;
};

type EngineActions = {
  createEngine: (canvas: HTMLCanvasElement) => void;
  setHasLoaded(loaded: boolean): void;
  setSelectedIndex(index: number | null): void;
};

export const useEngineStore = create<EngineState & EngineActions>((set) => ({
  engine: null,
  gameObject: null,
  hasLoaded: false,
  selectedIndex: null,
  setHasLoaded(loaded) {
    set((state) => ({ hasLoaded: loaded }));
  },
  setSelectedIndex(index) {
    set((state) => ({ selectedIndex: index }));
  },
  createEngine: (canvas: HTMLCanvasElement) => {
    set((state) => ({ engine: new Hydra({ render: { canvas } }) }));
  },
}));
