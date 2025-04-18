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

hydra.loadGameFromFile("games/keyboardTest.json").then(() => {
  hydra.start();
})

window.Hydra = hydra;

