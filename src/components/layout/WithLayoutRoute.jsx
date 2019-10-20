import React, { useState, Fragment, useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import classes from "./withlayoutrouter.module.scss";

//Components
import Header from "./Header";
import Footer from "./Footer";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import { useDidMount } from "./../../hooks/useLifeCycle";

const WithLayoutRoute = ({ ...props }) => {
  const [state, setState] = useState(1800);
  // window.onresize = () => {
  //   resize();
  // };
  const resize = () => {
    if (window.innerWidth < 700) {
      setState(600);
    } else {
      setState(1800);
    }
  };
  window.addEventListener("resize", resize);
  useDidMount(() => {
    if (window.innerWidth < 700) {
      setState(600);
    }
  });

  return (
    <Fragment>
      <div>{state < 700 ? <ResponsiveHeader /> : <Header />}</div>
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
