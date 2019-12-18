import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FormWrap } from "../styles/Wrap";
import { FormSign } from "../styles/Form";

function FormSignup() {
  const [email, setEmail] = useState("john.doe@test.com");
  const [password, setPassword] = useState("password");
  const [user, setUser] = useState("Johnny Doe");

  return (
    <FormWrap>
      <FormSign>
        <h2>Signup For An Account</h2>
        <div className="form-field">
          <label htmlFor="user">
            <input type="text" name="user" />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="email">
            <input type="email" name="email" value={email} />
          </label>
        </div>
        <div className="form-field">
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              value={password}
              placeholder={password}
            />
          </label>
        </div>
        <div className="form-field">
          <button>Sign me up</button>
        </div>
        <div className="form-field signup-block">
          <span>Already have an account? </span>
          <Link to="/signin"> Login</Link>
        </div>
      </FormSign>
    </FormWrap>
  );
}

export default FormSignup;
