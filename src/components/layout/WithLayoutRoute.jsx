import React, { useState, Fragment,useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";

const WithLayoutRoute = ({ ...props }) => {
  const [state,setState] = useState(true)
  console.log(window.innerWidth);
window.onresize= () => setState(!state);
  return (
    <Fragment>
      <div>{(window.innerWidth<700) ? <ResponsiveHeader /> : <Header />}</div>
      <div >
        <Route {...props} />
      </div>
    </Fragment>
  );
};

export default WithLayoutRoute;
