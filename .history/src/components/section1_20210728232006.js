import React, { useState, useEffect, useMemo } from "react";

const Section1 = (props) => {
  const [state] = useState({
    fullName: props.state.fullName,
    currentRole: props.state.currentRole,
    address1: props.state.address1,
    address2: props.state.address2,
    email: props.state.email,
    phone: props.state.phone,
    about: props.state.about,
  });
  useEffect(
    (e) => {
      console.log(e.target);
      props.onChange(e);
    },
    [
      state.fullName,
      state.currentRole,
      state.address1,
      state.address2,
      state.email,
      state.phone,
      state.about,
      props,
    ]
  ); /* fullName: "",
    currentRole: "",
    address1: "",
    address2: "",
    about: "",
    phone: "",
    email: "", */
  return (
    <div className="section section1">
      <label htmlFor="fullName">
        Full Name
        <input
          required
          id="fullName"
          name="fullName"
          onChange={useEffect}
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
          onChange={useEffect}
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
          onChange={useEffect}
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
          onChange={useEffect}
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
          onChange={useEffect}
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
          onChange={useEffect}
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
          onChange={useEffect}
          value={state.about}
        />
      </label>
    </div>
  );
};
export default Section1;
