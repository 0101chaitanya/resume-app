import React, { useState } from "react";

export default function Section2(props) {
  const [state, setState] = useState({
    schoolName1: props.state.schoolName1,
    titleOfStudy1: props.state.titleOfStudy1,
    from1: props.state.from1,
    to1: props.state.to1,

    schoolName2: props.state.schoolName2,
    titleOfStudy2: props.state.titleOfStudy2,
    from2: props.state.from2,
    to2: props.state.to2,
  });

  return (
    <div className="section section2">
      <div className="edu1">
        <label htmlFor="schoolName1">
          Organization providing the education or training
          <input
            required
            id="schoolName1"
            name="schoolName1"
            onChange={props.onChange}
            value={state.schoolName1}
            type="text"
          />
        </label>
        <label htmlFor="titleOfStudy1">
          Education or training undertaken
          <input
            required
            id="titleOfStudy1"
            name="titleOfStudy1"
            onChange={props.onChange}
            value={state.titleOfStudy1}
            type="text"
          />
        </label>
        <label htmlFor="from1">
          From
          <input
            required
            id="from1"
            name="from1"
            onChange={props.onChange}
            value={state.from1}
            type="date"
          />
        </label>
        <label htmlFor="to1">
          To
          <input
            required
            id="to1"
            name="to1"
            onChange={props.onChange}
            value={state.to1}
            type="date"
          />
        </label>
      </div>
      <div className="edu2">
        <label htmlFor="schoolName2">
          Organization providing the education or training
          <input
            required
            id="schoolName2"
            name="schoolName2"
            onChange={props.onChange}
            value={state.schoolName2}
            type="text"
          />
        </label>
        <label htmlFor="titleOfStudy2">
          Education or training undertaken
          <input
            required
            id="titleOfStudy2"
            name="titleOfStudy2"
            onChange={props.onChange}
            value={state.titleOfStudy2}
            type="text"
          />
        </label>
        <label htmlFor="from2">
          From
          <input
            required
            id="from2"
            name="from2"
            onChange={props.onChange}
            value={state.from2}
            type="date"
          />
        </label>
        <label htmlFor="to2">
          To
          <input
            required
            id="to2"
            name="to2"
            onChange={props.onChange}
            value={state.to2}
            type="date"
          />
        </label>
      </div>
    </div>
  );
}
