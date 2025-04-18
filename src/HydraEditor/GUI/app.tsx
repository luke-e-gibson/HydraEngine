import Editor from "./pages/Editor";
import { Link, Route, useRouter } from "./router";

export default function App() {
  const { path } = useRouter();

  return (
    <>
      <Route path="/">
        <Link to="/editor">Go to Editor</Link>
      </Route>
      <Route path="/editor">
        <Editor />
      </Route>
    </>
  );
}
