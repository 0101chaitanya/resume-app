import React, { useState, useEffect } from "react";
import "./App.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import ToggleButton from "react-toggle-button";
function App() {
  const [state, setState] = useState({
    fullName: "",
    currentRole: "",
    address1: "",
    address2: "",
    phone: "",
    email: "",
    about: "",

    schoolName1: "",
    titleOfStudy1: "",
    from1: "",
    to1: "",

    schoolName2: "",
    titleOfStudy2: "",
    from2: "",
    to2: "",

    organizationName1: "",
    titleOfRole1: "",
    workedFrom1: "",
    workedTill1: "",

    organizationName2: "",
    titleOfRole2: "",
    workedFrom2: "",
    workedTill2: "",

    skills: "",

    project1: "",
    project2: "",

    project3: "",

    file: "",
  });
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    console.log(state);
  });

  const onChange = (e) => {
    console.log(e);
    const { name, value, files } = e.target;
    console.log(name, value);
    setState({
      ...state,
      [name]:
        name === "file"
          ? URL.createObjectURL(files[0]) //.split("blob:")[1]
          : value,
    });
  };
  return (
    <div className="app">
      <header className="App-header">
        <h1>Resume-App</h1>
      </header>

      <label className="toggle">
        {!toggle ? "Preview" : "Showing preview"}
        <ToggleButton
          value={toggle}
          onToggle={(e) => {
            setToggle(!toggle);
          }}
        />
      </label>
      {!toggle ? (
        <div className="raw">
          <form>
            <Section1 state={state} onChange={onChange.bind(this)} />
            <Section2 state={state} onChange={onChange.bind(this)} />
            <Section3 state={state} onChange={onChange.bind(this)} />
            <Section4 state={state} onChange={onChange.bind(this)} />
            <Section5 state={state} onChange={onChange.bind(this)} />

            <div className="section section6">
              <label htmlFor="file">
                Photo
                <input id="file" name="file" onChange={onChange} type="file" />
              </label>
            </div>
          </form>
        </div>
      ) : (
        <div className="preview">
          <div className="printPreview">
            <div className="part1">
              <section className="part1Left">
                <p>{state.fullName}</p>
                <p>{state.currentRole}</p>
                <p>{state.email}</p>
                <p>{state.phone}</p>
              </section>
              <section className="part1Right">
                <div>
                  <img
                    src={state.file}
                    alt={state.file}
                    width="300"
                    height="300"
                  />
                </div>
              </section>
            </div>
          </div>
          <button type="button">Print</button>
        </div>
      )}
    </div>
  );
}

export default App;
