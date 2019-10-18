import React, { useState, Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";

const WithLayoutRoute = ({ ...props }) => {
  let state = true;
  return (
    <Fragment>
      <div>{state ? <ResponsiveHeader /> : <Header />}</div>
      <div>
        <Route {...props} />
      </div>
    </Fragment>
  );
};

export default WithLayoutRoute;
