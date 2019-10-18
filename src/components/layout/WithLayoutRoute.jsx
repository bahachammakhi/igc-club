import React, { useState, Fragment } from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Header from "./Header"

const WithLayoutRoute = ({ ...props }) =>{
    return(
        <Fragment>
            <div>
   <Header />
            </div>
            <div>
                <Route {...props} />
            </div>
        </Fragment>
    )
}

export default WithLayoutRoute;