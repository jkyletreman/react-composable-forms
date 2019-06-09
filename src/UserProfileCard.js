import React from "react";
import "./App.css";

const UserProfileCard = props => (
  <div>
    <div>
      <div className="card border">
        <img src={props.inputs.avatar} alt="no avatar" className="avatar " />
        <div>
          <h3>{props.inputs.username}</h3>
        </div>
      </div>
      <div className="submit">
        <button type="submit">Create My Profile!</button>
      </div>
    </div>
  </div>
);

export default UserProfileCard;
