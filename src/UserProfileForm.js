import React from "react";
import { withRouter } from "react-router-dom";
import "./App.css";

const faker = require("faker");
const avatar = faker.image.avatar(); // https://api.adorable.io/avatars/285/abott@adorable.png

const UserProfileForm = props => (
  <div className="container border">
    <div>
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
      <div className="submit button">
        <div onClick={() => props.history.push("/profile")}>Preview</div>
      </div>
    </div>
  </div>
);

export default withRouter(UserProfileForm);
