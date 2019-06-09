import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const faker = require("faker");
const avatar = faker.image.avatar(); // https://api.adorable.io/avatars/285/abott@adorable.png

const UserProfileForm = props => (
  <div className="container border">
    <form onSubmit={props.handleSubmit}>
      <div className="container margin">
        <img
          src={props.inputs.avatar || avatar}
          alt="avatar"
          className="avatar"
        />
      </div>
      <div>
        <label>Avatar Url</label>
        <input
          type="text"
          name="avatar"
          value={props.inputs.avatar}
          onChange={props.handleInputChange}
          placeholder={avatar}
        />
      </div>
      <div>
        <label>Username</label>
        <input
          text="text"
          name="username"
          value={props.inputs.username}
          onChange={props.handleInputChange}
        />
      </div>
      <div className="submit">
        <Link to="/profile">
          <button type="submit">Preview</button>
        </Link>
      </div>
    </form>
  </div>
);

export default UserProfileForm;
