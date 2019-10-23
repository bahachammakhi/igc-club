import React from "react";
import classes from "./Stat.module.scss";
import CountUp from "react-countup";
import Com from "../../assets/com.svg";
import Event from "../../assets/event.svg";
import Web from "../../assets/Web.svg";
import Membre from "../../assets/Membre.svg";
import TrackVisibility from "react-on-screen";

const Stat = () => {
  return (
    <div className={classes.cnstat}>
      <div className={classes.title}>Quelques Chiffres</div>
      <div className={classes.gridcontaine}>
        <div className={classes.griditem}>
          <img src={Membre} className={classes.imgstat} /> <div>Membre</div>{" "}
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && <CountUp end={30} duration={5} delay={0.2} />
            }
          </TrackVisibility>
        </div>
        <div className={classes.griditem}>
          <img src={Com} className={classes.imgstat} /> <div>Community</div>{" "}
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && <CountUp end={60} duration={5} delay={0.2} />
            }
          </TrackVisibility>
        </div>
        <div className={classes.griditem}>
          <img src={Event} className={classes.imgstat} />
          <div>Evénement</div>
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && <CountUp end={13} duration={5} delay={0.2} />
            }
          </TrackVisibility>
        </div>
        <div className={classes.griditem}>
          <img src={Web} className={classes.imgstat} /> <div>Site web</div>{" "}
          <TrackVisibility once>
            {({ isVisible }) =>
              isVisible && <CountUp end={3} duration={5} delay={0.2} />
            }
          </TrackVisibility>
        </div>
      </div>
    </div>
  );
};

export default Stat;
