import React, { useState } from "react";

export default function Section4(props) {
    const [state] = useState({
   skills: props.state.skills,
    }

return (<div className="section section4">
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