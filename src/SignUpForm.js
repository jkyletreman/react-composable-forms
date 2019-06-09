import React from "react";
import "./App.css";

const SignUpForm = props => (
  <div className="container border">
    <div>
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
      <div className="submit button">
        <div onClick={() => props.history.push("/two")}>Next</div>
      </div>
    </div>
  </div>
);

export default SignUpForm;
