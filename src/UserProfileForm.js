import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./CustomHooks";
import "./App.css";

const faker = require("faker");
const avatar = faker.image.avatar();

const UserProfileForm = () => {
  // callback function
  const confirmation = () => {
    alert(`User Created!
               Avatar: ${inputs.avatar},
               Nickname: ${inputs.avatar}
        `);
  };

  // custom hook - takes callback as param
  const { inputs, handleInputChange, handleSubmit } = useForm(confirmation);

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="container margin">
          <img src={inputs.avatar || avatar} alt="avatar" className="avatar" />
        </div>
        <div>
          <label>Avatar url</label>
          <input
            type="text"
            name="avatar"
            value={inputs.avatar}
            onChange={handleInputChange}
          />
        </div>
        <div className="submit">
          <Link to="/">
            <button type="submit" onSubmit={handleSubmit}>
              Preview
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
