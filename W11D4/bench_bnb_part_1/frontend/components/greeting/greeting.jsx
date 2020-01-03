import React from "react";
import { Link } from 'react-router-dom';

const Greeting = props => {
  return (
    props.currentUser ? (
      <div>
        <h1>{`Welcome ${props.currentUser.username}`}</h1>
        <button onClick={props.logout}>Logout</button>
      </div>
    ) : (
      <div>
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Log In</Link>
      </div>
    )
  )
};

export default Greeting;