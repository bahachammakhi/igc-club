import React, { useState } from "react";
import classes from "./partners.module.scss";
import { Popover, Button } from "antd";

//images
import gdgmona from "./../../assets/gdgmona.png";
import gomycode from "./../../assets/gomycode.png";

const Partners = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.title}>
        <span>Les partenaires</span>
      </div>
      <div className={classes.text}>
        <span  style={{marginBottom:"10px"}}>
          Un très grand merci à tous nos partenaires pour leur partenariat
          continu.
        </span>
        <span>
          Si vous souhaitez être présenté dans <b>IGC ISTIC</b>, contactez 
           <b> igc.istic@gmail.com</b> pour discuter des opportunités de parrainage.
        </span>
      </div>
      <div className={classes.imgs}>
        <Popover content={<div className={classes.popover}>GDG</div>} placement="bottom"  >
          <img className={classes.logo} alt="pic" src={gdgmona} />
        </Popover>
        <Popover content={<div className={classes.popover}>GOMYCODE</div>} placement="bottom">
          <img className={classes.logo} alt="pic" src={gomycode} />
        </Popover>
      </div>
    </div>
  );
};

export default Partners;
