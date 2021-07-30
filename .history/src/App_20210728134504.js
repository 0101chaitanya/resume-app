import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({
    fullName: "",
    currentRole: "",
    address1: "",
    address2: "",
  });
  useEffect(() => {
    console.log(state);
  });
  const onChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Resume-App</h1>
      </header>
      <form>
        <label>
          Full Name
          <input
            name="fullName"
            onChange={onChange}
            value={state.fullName}
            type="text"
          />
        </label>
        <label>
          Current Role
          <input
            name="currentRole"
            onChange={onChange}
            value={state.currentRole}
            type="text"
          />
        </label>
        <label>
          Address Field 1
          <input
            name="address1"
            onChange={onChange}
            value={state.address1}
            type="text"
          />
        </label>
        <label>
          Address Field 2
          <input
            name="address2"
            onChange={onChange}
            value={state.address2}
            type="text"
          />
        </label>
        <label>
          Email
          <input
            name="email"
            onChange={onChange}
            value={state.email}
            type="email"
          />
        </label>
        <label>
          Phone
          <input
            name="phone"
            onChange={onChange}
            value={state.phone}
            type="tel"
          />
        </label>
      </form>
    </div>
  );
}

export default App;
