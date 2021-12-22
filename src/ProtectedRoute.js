import React from "react";
import {Routes, Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Routes>
    <Route
      {...rest}
      render={(props) => {
        if (auth) return <Component {...props} />;
        if (!auth)
          return (
            <Redirect to={{ path: "/", state: { from: props.location } }} />
          );
      }}
    />
    </Routes>
  );
};

export default ProtectedRoute;  