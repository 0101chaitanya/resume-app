import React, { useState } from "react";

export default function Section4(props) {
  const [state] = useState({
    project1: props.project1,
    project2: props.project2,
    project3: props.project3,
  });
  return (
    <div className="section section5">
      <ol>
        Projects:
        <li>
          <label htmlFor="project1">
            <input
              required
              id="project1"
              name="project1"
              onChange={props.onChange}
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
              onChange={props.onChange}
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
              onChange={props.onChange}
              value={state.project3}
              type="text"
            />
          </label>
        </li>
      </ol>
    </div>
  );
}
