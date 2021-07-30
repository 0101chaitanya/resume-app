import React, { useState, useEffect } from "react";
import "./App.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import ToggleButton from "react-toggle-button";
/* fullName: "",
    currentRole: "",
    address1: "",
    address2: "",
    about: "",
    phone: "",
    email: "",
  
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

  
    */

function App() {
  const [state, setState] = useState({
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
    const { name, value } = e.target;
    console.log(name, value);
    setState({
      ...state,
      [name]: value,
    });
    console.log(state);
  };
  const handleSubmit = (e) => {
    localStorage.setItem("savedData", JSON.stringify(state));
    setState({
      fullName: "",
      currentRole: "",
      address1: "",
      address2: "",
      email: "",
      phone: "",
      about: "fsfesffsffsefsfsefes",
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
    });
    e.target.submit();
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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
          >
            <Section1 state={state} onChange={onChange.bind(this)} />
            <Section2 state={state} onChange={onChange.bind(this)} />
            <Section3 state={state} onChange={onChange.bind(this)} />

            <div className="section section4">
              <label htmlFor="skills">
                Skills
                <input
                  required
                  id="skills"
                  name="skills"
                  onChange={onChange}
                  value={state.skills}
                  type="text"
                />
              </label>
            </div>
            <div className="section section5">
              <ol>
                Projects:
                <li>
                  <label htmlFor="project1">
                    <input
                      required
                      id="project1"
                      name="project1"
                      onChange={onChange}
                      value={state.project1}
                      type="text"
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="project2">
                    <input
                      required
                      id="project2"
                      name="project2"
                      onChange={onChange}
                      value={state.project2}
                      type="text"
                    />
                  </label>
                </li>
                <li>
                  <label htmlFor="project3">
                    <input
                      id="project3"
                      name="project3"
                      onChange={onChange}
                      value={state.project3}
                      type="text"
                    />
                  </label>
                </li>
              </ol>
            </div>
            <div className="section section6">
              <label htmlFor="file">
                Photo
                <input
                  id="file"
                  name="file"
                  onChange={(e) => {
                    console.log(e.target);
                    onChange(e);
                  }}
                  value={state.file}
                  type="file"
                />
              </label>
            </div>
          </form>
        </div>
      ) : (
        <div className="preview">
          <button type="submit">Save</button>
        </div>
      )}
    </div>
  );
}

export default App;
