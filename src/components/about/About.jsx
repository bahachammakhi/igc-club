import React, { useState } from "react";
import classes from "./about.module.scss";
import _ from "lodash";

const About = ({ img, title, details, direction }) => {
  const [state, handlestate] = useState(true);
  const resize = () => {
    handlestate(!state);
    // document.location.reload(true);
  };
  window.addEventListener("resize", _.debounce(resize, 800));
  if (window.innerWidth < 768) {
    direction = "";
  }
  return (
    <div className={classes.wwrapper}>
      <div className={classes.container} style={{ flexDirection: direction }}>
        <img className={classes.img} src={img} alt="img" />
        <div className={classes.texts}>
          <span className={classes.title}>{title}</span>
          <span className={classes.details}>{details}</span>
        </div>
      </div>
    </div>
  );
};

export default About;
