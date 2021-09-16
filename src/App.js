import logo from "./logo.svg";
import "./App.css";
import { returnArtifact } from "./artifact";
import * as colors from "./colors";

function App() {
  const art = returnArtifact();
  console.log(JSON.stringify(art));
  console.log(JSON.stringify(art, null, "\t"));

  const copyToClipboard = () => {
    navigator.clipboard.writeText(JSON.stringify(art));
  };
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ fontSize: ".5em", width: "75%" }}>
          {JSON.stringify(art, null, "\t")}
        </div>
        <button onClick={copyToClipboard}>Copy</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
