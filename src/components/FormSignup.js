import React, { useState } from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";
import { FormWrap } from "../styles/Wrap";
import { FormSign } from "../styles/Form";

function FormSignup() {
  const [email, setEmail] = useState("john.doe@test.com");
  const [password, setPassword] = useState("password");
  const [user, setUser] = useState("Johnny Doe");

  const handleChange = e => {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    setEmail(value);
  };
  const handlePass = e => {
    setPassword(e.target.value);
    console.log(password);
  };

  return (
    <FormWrap>
      <Nav />
      <FormSign>
        <h2>Signup For An Account</h2>
        <div className="form-field">
          <label htmlFor="user">
            <input
              type="text"
              name="user"
              value={user}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={password}
              placeholder={password}
              onChange={handlePass}
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
