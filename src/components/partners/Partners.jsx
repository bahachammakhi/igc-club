import React, { useState } from "react";
import classes from "./partners.module.scss";

//images
import gdgmo from "./../../assets/gdgmo.png";
import gdgmona from "./../../assets/gdgmona.png";
import gomycode from "./../../assets/gomycode.png";

const Partners = () => {
  return (
    <div>
      <img className={classes.logo} src={gdgmo} />
      <img className={classes.logo} src={gdgmona} />
      <img className={classes.logo} src={gomycode} />
    </div>
  );
};

export default Partners;
