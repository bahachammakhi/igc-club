import React, { useState, Fragment } from "react";
import { Route, RouteProps } from "react-router-dom";



const WithLayoutRoute = ({ ...props }) =>{
    return(
        <Fragment>
            <div>
                <Route {...props} />
            </div>
        </Fragment>
    )
}

export default WithLayoutRoute;