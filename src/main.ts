import createEditor from "./HydraEditor";
import "./style.css"
import Hydra from "@hydra/engine";
declare global {
  interface Window {
    Hydra: Hydra;
  }
}

const USE_EDITOR = true;

if(USE_EDITOR) {
  void createEditor();
} else {
  const hydra = new Hydra({
    render: {}
  });
  window.Hydra = hydra;
  hydra.loadGameFromFile("games/keyboardTest.json").then(() => {
    hydra.start();
  })
}

