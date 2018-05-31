import React from "react";
import { auth } from "./firebase";
import "./CurrentUser.css";

const CurrentUser = ({ user }) => {
  return (
    <div className="CurrentUser">
      {/* <img
        className="CurrentUser-image"
        src={user.photoURL}
        alt={user.displayName}
      /> */}
      <div className="CurrentUser-id">
        <h3>{user.displayName}</h3>
        <h4>{user.uid}</h4>
        <p>{user.email}</p>

        <button onClick={() => auth.signOut()}>Sign Out</button>
      </div>
    </div>
  );
};

export default CurrentUser;
