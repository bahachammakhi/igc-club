import React, { useState } from "react";
import DescriptionSection from "../../components/descrption/DescriptionSection";
import Members from "../../components/members/Members";
import classes from "./homecontainer.module.scss";
import Partners from "../../components/partners/Partners";

const HomeContainer = () => {
  return (
    <div>
      <div className={classes.description}>
        <DescriptionSection />
      </div>
      <div className={classes.members}>
        <Members />
      </div>
      <div className={classes.partners}>
        <Partners />
      </div>
    </div>
  );
};

export default HomeContainer;
