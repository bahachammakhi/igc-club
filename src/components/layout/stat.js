import React from "react";
import classes from "./stat.module.scss";
import CountUp from "react-countup";
import Com from "../../assets/com.svg";
import Event from "../../assets/event.svg";
import Web from "../../assets/Web.svg";

const Stat = () => {
  return (
    <div className={classes.cnstat}>
      <div className={classes.title}>Quelques Chiffres</div>
      <div className={classes.gridcontaine}>
        <div className={classes.griditem}>
          <img src={Com} className={classes.img} /> <div>Membre</div>{" "}
          <CountUp end={30} duration={10} />
        </div>
        <div className={classes.griditem}>
          <img src={Com} className={classes.img} /> <div>Community</div>{" "}
          <CountUp end={70} duration={10} />
        </div>
        <div className={classes.griditem}>
          <img src={Event} className={classes.img} />
          <div>Evénement</div>
          <CountUp end={11} duration={4} />
        </div>
        <div className={classes.griditem}>
          <img src={Web} className={classes.img} /> <div>Site web</div>{" "}
          <CountUp end={3} duration={4} />
        </div>
      </div>
    </div>
  );
};

export default Stat;
