import React, { useState, useEffect } from "react";

export default function Section4(props) {
  const [state, setState] = useState({
    project1: props.state.project1,
    project2: props.state.project2,
    project3: props.state.project3,
  });
  useEffect(() => {
    setState(props.state);
  }, [props.state]);

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
