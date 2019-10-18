import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

// containers
import WithLayoutRoute from "../components/layout/WithLayoutRoute";
import HomeContainer from "./homeContainer/HomeContainer";

const RootContainer = ({ history }) => {
  return (
    <div>
      <Switch>
        <WithLayoutRoute path="/" exact component={HomeContainer} />
      </Switch>
    </div>
  );
};

export default RootContainer;
