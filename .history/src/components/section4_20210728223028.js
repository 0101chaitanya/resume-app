import React, { useState } from "react";

export default function Section4(props) {
    const [state] = useState({
  
    }
return (<div className="section section4">
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
    );
}