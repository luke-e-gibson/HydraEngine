import { createRoot } from "react-dom/client";

import App from "./GUI/app";
import { Router } from "./GUI/router";

export default function createEditor() {
  const editorHolder = document.createElement("div");
  document.body.appendChild(editorHolder);

  const root = createRoot(editorHolder);
  root.render(<Router><App /></Router>);

}
