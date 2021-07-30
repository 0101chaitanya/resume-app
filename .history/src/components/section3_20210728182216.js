import React, { useState } from "react";

export default function Section2(props) {
  const [state, setState] = useState({
    organizationName1: organizationName1,
    titleOfRole1: titleOfRole1,
    workedFrom1: workedFrom1,
    workedTill1: workedTill1,

    organizationName2: organizationName2,
    titleOfRole2: titleOfRole2,
    workedFrom2: workedFrom2,
    workedTill2: workedTill2,
  });
  return (
    <div className="section section3">
      <div className="job1">
        <label htmlFor="organizationName1">
          Name of the organization
          <input
            required
            id="organizationName1"
            name="organizationName1"
            onChange={props.onChange}
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
            onChange={props.onChange}
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
            onChange={props.onChange}
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
            onChange={props.onChange}
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
            onChange={props.onChange}
            value={state.organizationName2}
            type="text"
          />
        </label>
        <label htmlFor="titleOfRole2">
          Title of the role
          <input
            id="titleOfRole2"
            name="titleOfRole2"
            onChange={props.onChange}
            value={state.titleOfRole2}
            type="text"
          />
        </label>
        <label htmlFor="workedFrom2">
          From
          <input
            id="workedFrom2"
            name="workedFrom2"
            onChange={props.onChange}
            value={state.workedFrom2}
            type="date"
          />
        </label>
        <label htmlFor="workedTill2">
          To
          <input
            id="workedTill2"
            name="workedTill2"
            onChange={props.onChange}
            value={state.workedTill2}
            type="date"
          />
        </label>
      </div>
    </div>
  );
}
