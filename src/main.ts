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
window.Hydra = hydra;

