import React from "react";
import { connect } from "react-redux";
import { Redirect, Route, withRouter } from "react-router-dom";

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.currentUser)
  };
};

const Auth = ({ component: Component, loggedIn, path }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        loggedIn ? <Redirect to="/" /> : <Component {...props} />
      )}
    />
  );
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

const Protected = ({ component: Component, loggedIn, path }) => {
  return (
    <Route
      path={path}
      render={(props) => (
        loggedIn ? <Component {...props} /> : <Redirect to="/signup" />
      )}
    />
  );
};

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));