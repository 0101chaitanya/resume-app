import React, { useState, useEffect } from "react";

export default function Section4(props) {
  const [state, setState] = useState({
    skills: props.state.skills,
  });
  useEffect(() => {
    setState(props.state);
  }, [props.state]);

  return (
    <div className="section section4">
      <label htmlFor="skills">
        Skills
        <input
          required
          id="skills"
          name="skills"
          onChange={props.onChange}
          value={state.skills}
          type="text"
        />
      </label>
    </div>
  );
}
