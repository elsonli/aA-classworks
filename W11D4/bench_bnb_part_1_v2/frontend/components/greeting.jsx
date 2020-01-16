import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, userLogout }) => {
  return (
    currentUser ? (
      <div>
        <h1>Welcome { currentUser.username }</h1>
        <input type="button" value="Logout" onClick={ () => userLogout() }/>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  );
};

export default Greeting;