import "./style.css"
import Hydra from "@hydra/engine";


declare global {
  interface Window {
    Hydra: Hydra;
  }
}

const hydra = new Hydra({
  render: {}
});

hydra.loadGame("games/test.json").then(() => {
  hydra.start();
})

window.Hydra = hydra;

