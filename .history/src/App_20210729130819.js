import React, { useState, useEffect } from "react";
import "./App.css";
import Section1 from "./components/section1";
import Section2 from "./components/section2";
import Section3 from "./components/section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
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
    fullName: "",
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
    file: "",
    image: null,
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
      file: "",
      image: null,
    });
    e.target.submit();
  };
  /*  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      console.log(img);
      setState({
        ...state,
        image: {
          preview: URL.createObjectURL(event.target.files[0]),
          raw: event.target.files[0],
        },
      });
    }
  };
  */ return (
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
            <Section4 state={state} onChange={onChange.bind(this)} />
            <Section5 state={state} onChange={onChange.bind(this)} />

            <div className="section section6">
              <label htmlFor="image">
                Photo
                <input
                  id="image"
                  name="image"
                  onChange={(e) => {
                    onChange(e);

                    console.log(state.file);
                    //return onImageChange;
                  }}
                  value={state.image}
                  type="file"
                />
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
                  <img src={state.image} alt="dummy" width="300" height="300" />{" "}
                </div>
              </section>
            </div>

            {/*    fullName: "",
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
      file: "",
    */}
          </div>
          <button type="button">Print</button>
        </div>
      )}
    </div>
  );
}

export default App;
