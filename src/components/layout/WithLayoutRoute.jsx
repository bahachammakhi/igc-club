import React, { useState, Fragment,useEffect } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./withlayoutrouter.syle.scss"

//Components
import Header from "./Header";
import Footer from "./Footer"
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";

const WithLayoutRoute = ({ ...props }) => {
  const [state,setState] = useState(true)
  console.log(window.innerWidth);
window.onresize= () => setState(!state);
  return (
    <Fragment>
      <div>{(window.innerWidth<700) ? <ResponsiveHeader /> : <Header />}</div>
      <div className="body" >
        <Route {...props} />
      </div>
    <div className="footer">
      <Footer />
    </div>
    </Fragment>
  );
};

export default WithLayoutRoute;
