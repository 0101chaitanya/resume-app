import React, { useState } from "react";

export default function Section1(props) {
  const [state, setState] = useState({
    /*     fullName: props.status.fullName,
    currentRole: props.status.currentRole,
    address1: props.status.address1,
    address2: props.status.address2,
    email: props.status.email,
    phone: props.status.phone,
    about: props.status.about,
 */
    fullName: "",
    currentRole: "",
    address1: "",
    address2: "",
    about: "",
    phone: "",
    email: "",
  });
  return (
    <div className="section section1">
      <label htmlFor="fullName">
        Full Name
        <input
          required
          id="fullName"
          name="fullName"
          onChange={(e) => props.onChange(e)}
          value={state.fullName}
          type="text"
        />
      </label>
      <label htmlFor="currentRole">
        Current Role
        <input
          required
          id="currentRole"
          name="currentRole"
          onChange={props.onChange}
          value={state.currentRole}
          type="text"
        />
      </label>
      <label htmlFor="address1">
        Address Field 1
        <input
          required
          id="address1"
          name="address1"
          onChange={props.onChange}
          value={state.address1}
          type="text"
        />
      </label>
      <label htmlFor="address2">
        Address Field 2
        <input
          required
          id="address2"
          name="address2"
          onChange={props.onChange}
          value={state.address2}
          type="text"
        />
      </label>
      <label htmlFor="email">
        Email
        <input
          required
          id="email"
          name="email"
          onChange={props.onChange}
          value={state.email}
          type="email"
        />
      </label>
      <label htmlFor="phone">
        Phone
        <input
          required
          id="phone"
          name="phone"
          onChange={props.onChange}
          value={state.phone}
          type="tel"
        />
      </label>
      <label htmlFor="about">
        About
        <textarea
          rows={3}
          id="about"
          name="about"
          onChange={props.onChange}
          value={state.about}
        />
      </label>
    </div>
  );
}
