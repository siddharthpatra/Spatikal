import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import PropTypes from "prop-types";

export default function PrivateRoute({ component: Component, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        );
      }}
    ></Route>
  );
}
PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired,
  location: PropTypes.string,
};
