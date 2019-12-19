import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { FormSign } from "../styles/Form";
import useForm from "./useForm";

function FormSignup() {
  const { handleChange, handleSubmit, handleFocus, values } = useForm(submit);
  function submit() {
    console.log("Submit successfully");
  }
  // const [email, setEmail] = useState("john.doe@test.com");
  // const [password, setPassword] = useState("password");
  // const [user, setUser] = useState("Johnny Doe");

  // const handleChange = e => {
  //   let target = e.target;
  //   let value = target.type === "checkbox" ? target.checked : target.value;
  //   setEmail(value);
  // };
  // const handlePass = e => {
  //   setPassword(e.target.value);
  //   console.log(password);
  // };

  return (
    <FormWrap>
      <Nav />
      <FormSign noValidate onSubmit={handleSubmit}>
        <h2>Signup For An Account</h2>
        <div className="form-field">
          <label htmlFor="user">
            <input
              type="text"
              name="user"
              value={values.user}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder={values.password}
              onChange={handleChange}
              onFocus={handleFocus}
            />
          </label>
        </div>
        <div className="form-field">
          <button>Sign me up</button>
        </div>
        <div className="form-field signup-block">
          <span>Already have an account? </span>
          <Link to="/"> Login</Link>
        </div>
      </FormSign>
    </FormWrap>
  );
}

export default FormSignup;
