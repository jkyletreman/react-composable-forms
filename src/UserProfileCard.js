import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const UserProfileCard = props => (
  <div>
    <div className="card border">
      <img src={props.inputs.avatar} alt="no avatar" className="avatar " />
      <div>
        <h3>{props.inputs.username}</h3>
      </div>
    </div>
    <div className='submit'>
      <Link to="/">
        <button type="submit">Create My Profile!</button>
      </Link>
    </div>
  </div>
);

export default UserProfileCard;
