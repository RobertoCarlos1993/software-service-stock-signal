import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { config } from "./config";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn how to profit by using our service {config.STRIPE_KEY}
        </a>
      </header>
    </div>
  );
}

export default App;
