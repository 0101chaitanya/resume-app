import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
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

  
    */

function App() {
  const [state, setState] = useState({
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
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <Section1 state={state} onChange={onChange.bind(this)} />
        <Section2 state={state} onChange={onChange.bind(this)} />

        <div className="section section3">
          <div className="job1">
            <label htmlFor="organizationName1">
              Name of the organization
              <input
                required
                id="organizationName1"
                name="organizationName1"
                onChange={onChange}
                value={state.organizationName1}
                type="text"
              />
            </label>
            <label htmlFor="titleOfRole1">
              Title of the role
              <input
                required
                id="titleOfRole1"
                name="titleOfRole1"
                onChange={onChange}
                value={state.titleOfRole1}
                type="text"
              />
            </label>
            <label htmlFor="workedFrom1">
              From
              <input
                required
                id="workedFrom1"
                name="workedFrom1"
                onChange={onChange}
                value={state.workedFrom1}
                type="date"
              />
            </label>
            <label htmlFor="workedTill1">
              To
              <input
                required
                id="workedTill1"
                name="workedTill1"
                onChange={onChange}
                value={state.workedTill1}
                type="date"
              />
            </label>
          </div>
          <div className="job2">
            <label htmlFor="organizationName2">
              Name of the organization
              <input
                id="organizationName2"
                name="organizationName2"
                onChange={onChange}
                value={state.organizationName2}
                type="text"
              />
            </label>
            <label htmlFor="titleOfRole2">
              Title of the role
              <input
                id="titleOfRole2"
                name="titleOfRole2"
                onChange={onChange}
                value={state.titleOfRole2}
                type="text"
              />
            </label>
            <label htmlFor="workedFrom2">
              From
              <input
                id="workedFrom2"
                name="workedFrom2"
                onChange={onChange}
                value={state.workedFrom2}
                type="date"
              />
            </label>
            <label htmlFor="workedTill2">
              To
              <input
                id="workedTill2"
                name="workedTill2"
                onChange={onChange}
                value={state.workedTill2}
                type="date"
              />
            </label>
          </div>
        </div>
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default App;
