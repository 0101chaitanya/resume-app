import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [state, setState] = useState({
    fullName: "",
    currentRole: "",
    address1: "",
    address2: "",

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
              Organization providing the education or training
              <input
                id="schoolName1"
                name="schoolName1"
                onChange={onChange}
                value={state.schoolName1}
                type="text"
              />
            </label>
            <label htmlFor="titleOfStudy1">
              Education or training undertaken
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
            <label htmlFor="schoolName2">
              Organization providing the education or training
              <input
                id="schoolName2"
                name="schoolName2"
                onChange={onChange}
                value={state.schoolName2}
                type="text"
              />
            </label>
            <label htmlFor="titleOfStudy2">
              Education or training undertaken
              <input
                id="titleOfStudy2"
                name="titleOfStudy2"
                onChange={onChange}
                value={state.titleOfStudy2}
                type="text"
              />
            </label>
            <label htmlFor="from2">
              From
              <input
                id="from2"
                name="from2"
                onChange={onChange}
                value={state.from2}
                type="date"
              />
            </label>
            <label htmlFor="to2">
              To
              <input
                id="to2"
                name="to2"
                onChange={onChange}
                value={state.to2}
                type="date"
              />
            </label>
          </div>
        </div>
        <div className="section section3">
          <div className="job1">
            <label htmlFor="organizationName1">
              Name of the organization
              <input
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
        <div className="section section4"></div>
      </form>
    </div>
  );
}

export default App;
