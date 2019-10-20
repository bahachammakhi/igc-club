import React, { useState, Fragment, useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./withlayoutrouter.module.scss";

//Components
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";

const WithLayoutRoute = ({ ...props }) => {
  const [state, setState] = useState(true);
  window.onresize = () => setState(!state);
  return (
    <Fragment>
      <div>{window.innerWidth < 700 ? <ResponsiveHeader /> : <Header />}</div>
      <div className={classes.body}>
        <Route {...props} />
      </div>
      <div className={classes.footer}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default WithLayoutRoute;
