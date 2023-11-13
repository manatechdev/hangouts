import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button";
import { BeakerIcon } from "@heroicons/react/24/solid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload (hangouts) !.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React{" "}
        </a>
        <Button
          label="What"
          variant="primary"
          iconStart={<BeakerIcon className="h-6 w-6" />}
        />
        <Button
          label="What"
          variant="secondary"
          iconStart={<BeakerIcon className="h-6 w-6" />}
        />
        <Button
          label="What"
          variant="ghost"
          iconStart={<BeakerIcon className="h-6 w-6" />}
        />
      </header>
    </div>
  );
}

export default App;
