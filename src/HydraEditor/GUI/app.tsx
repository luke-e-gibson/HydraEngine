import Editor from "./pages/Editor";
import { Link, Route, useRouter } from "./router";

export default function App() {
  const { path } = useRouter();

  return (
    <>
      <Route path="/">
        <Editor />
      </Route>
      <Route path="/editor">
      </Route>
    </>
  );
}
