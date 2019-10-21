import React from "react";
import { Icon } from "antd";
import classes from "./Stat.module.scss";

const Stat = () => {
    return(
        <div className={classes.cnstat}>
            <div className={classes.title}>Quelques Chiffres</div>
<div className={classes.gridcontaine} >
   <div className={classes.griditem}>1</div>
   <div className={classes.griditem}>1</div>
   <div className={classes.griditem}>1</div>
   <div className={classes.griditem}>1</div>
    </div>
        </div>

    );   
};

export default Stat;
