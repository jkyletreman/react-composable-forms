import React from "react";
import { Link } from "react-router-dom";
// https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57
import { useForm } from "./CustomHooks";
import "./App.css";
const SignUpForm = () => {
  // callback function
  const confirmation = () => {
    alert(`User Created!
             Name: ${inputs.firstName}`);
  };

  // custom hook - takes callback as param
  const { inputs, handleInputChange, handleSubmit } = useForm(confirmation);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={inputs.email}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="text"
            name="password"
            value={inputs.password}
            onChange={handleInputChange}
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
};

export default SignUpForm;
