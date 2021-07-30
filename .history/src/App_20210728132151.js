import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({
    fullName: "",
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume-App</h1>
      </header>
      <form>
        <label>
          <input name="fullName" value={state.fullName} type="text" />
        </label>
      </form>
    </div>
  );
}

export default App;
