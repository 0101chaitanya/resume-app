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
        <div className="section section1">
          <label htmlFor="fullName">
            Full Name
            <input
              id="fullName"
              name="fullName"
              onChange={onChange}
              value={state.fullName}
              type="text"
            />
          </label>
          <label htmlFor="currentRole">
            Current Role
            <input
              id="currentRole"
              name="currentRole"
              onChange={onChange}
              value={state.currentRole}
              type="text"
            />
          </label>
          <label htmlFor="address1">
            Address Field 1
            <input
              id="address1"
              name="address1"
              onChange={onChange}
              value={state.address1}
              type="text"
            />
          </label>
          <label htmlFor="address2">
            Address Field 2
            <input
              id="address2"
              name="address2"
              onChange={onChange}
              value={state.address2}
              type="text"
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              id="email"
              name="email"
              onChange={onChange}
              value={state.email}
              type="email"
            />
          </label>
          <label htmlFor="phone">
            Phone
            <input
              id="phone"
              name="phone"
              onChange={onChange}
              value={state.phone}
              type="tel"
            />
          </label>
        </div>
        <div className="section section2">
          <div className="edu1">
            <label htmlFor="schoolName1">
              School or University Name
              <input
                id="schoolName1"
                name="schoolName1"
                onChange={onChange}
                value={state.schoolName1}
                type="text"
              />
            </label>
            <label htmlFor="titleOfStudy1">
              Title of Study
              <input
                id="titleOfStudy1"
                name="titleOfStudy1"
                onChange={onChange}
                value={state.titleOfStudy1}
                type="text"
              />
            </label>
            <label htmlFor="from1">
              From
              <input
                id="from1"
                name="from1"
                onChange={onChange}
                value={state.from1}
                type="date"
              />
            </label>
            <label htmlFor="to1">
              To
              <input
                id="to1"
                name="to1"
                onChange={onChange}
                value={state.to1}
                type="date"
              />
            </label>
          </div>
          <div className="edu2">
            <label htmlFor="schoolName1">
              School or University Name
              <input
                id="schoolName1"
                name="schoolName1"
                onChange={onChange}
                value={state.schoolName1}
                type="text"
              />
            </label>
            <label htmlFor="titleOfStudy1">
              Title of Study
              <input
                id="titleOfStudy1"
                name="titleOfStudy1"
                onChange={onChange}
                value={state.titleOfStudy1}
                type="text"
              />
            </label>
            <label htmlFor="from1">
              From
              <input
                id="from1"
                name="from1"
                onChange={onChange}
                value={state.from1}
                type="date"
              />
            </label>
            <label htmlFor="to1">
              To
              <input
                id="to1"
                name="to1"
                onChange={onChange}
                value={state.to1}
                type="date"
              />
            </label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
