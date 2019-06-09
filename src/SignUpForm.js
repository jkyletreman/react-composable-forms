import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const SignUpForm = props => (
  <div className="container border">
    <form onSubmit={props.handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          value={props.inputs.email}
          onChange={props.handleInputChange}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="text"
          name="password"
          value={props.inputs.password}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="submit">
        <Link to="/two">
          <button type="submit">Next</button>
        </Link>
      </div>
    </form>
  </div>
);

export default SignUpForm;
