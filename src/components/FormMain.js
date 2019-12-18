import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function FormMain() {
  const [email, setEmail] = useState("john.doe@test.com");
  const [password, setPassword] = useState("password");
  const [isRemember, setIsRemember] = useState(false);
  return (
    <form>
      <h2>Login to Your Account</h2>
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
      <div className="form-field remember-block">
        <label>
          <input type="checkbox" name="isRemember" value={isRemember} />
          <span></span>
          Remember me
        </label>

        <Link to="/forgot"> Forgot Password?</Link>
      </div>
      <div className="form-field">
        <button>Login</button>
      </div>
      <div className="form-field signup-block">
        <span>Don't have an account? </span>
        <Link to="/signup"> Signup</Link>
      </div>
    </form>
  );
}
export default FormMain;
