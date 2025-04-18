import createEditor from "./HydraEditor";
import "./style.css"
import Hydra from "@hydra/engine";
declare global {
  interface Window {
    Hydra: Hydra;
  }
}
if(window.localStorage.getItem("useEditor") === null) {
  window.localStorage.setItem("useEditor", "false");
}

const USE_EDITOR = window.localStorage.getItem("useEditor") === "true";

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

