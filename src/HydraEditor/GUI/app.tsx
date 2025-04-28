import Editor from "./pages/Editor";
import { Link, Route, useRouter } from "./router";

export default function App() {
  const { path } = useRouter();

  return (
    <>
        <Editor />
    </>
  );
}
