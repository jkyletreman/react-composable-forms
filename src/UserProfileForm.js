import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "./CustomHooks";
import "./App.css";

const faker = require('faker');

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
        <div>
          <label>Avatar link</label>
          <input
            type="text"
            name="avatar"
            value={inputs.avatar}
            onChange={handleInputChange}
          />
        </div>
        <div className='container'>
            <img src={inputs.avatar || faker.image.avatar()} alt="avatar" className="avatar"/>
        </div>
        <div className='submit'>
          <Link to="/">
            <button type="submit" onSubmit={handleSubmit}>Preview</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default UserProfileForm;
