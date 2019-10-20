import React, { setState } from "react";
import { withRouter, Link } from "react-router-dom";
import { Icon } from "antd";

import classes from "./sidenav.module.scss";
const SideNav = ({ navitems, match, setOpen }) => {
  const navlinks = navitems.map(item => {
    if (item === "About" && match.path === "/") {
      return (
        <Link
          className={classes.navitem}
          style={{
            color: "#4285F4",
            textDecoration: "none",
            backgroundColor: "#d3f0ec",
            borderRadius: "5px"
          }}
        >
          {item}
        </Link>
      );
    }
    if (item !== match.path) {
      return (
        <Link
          className={classes.navitem}
          style={{ color: "black", textDecoration: "none" }}
        >
          {item}
        </Link>
      );
    } else {
      return (
        <Link
          className={classes.navitem}
          style={{
            color: "#4285F4",
            textDecoration: "none",
            backgroundColor: "#d3f0ec",
            borderRadius: "5px"
          }}
        >
          {item}
        </Link>
      );
    }
  });
  return (
    <div className={classes.wrapper}>
      <Icon
        type="close"
        style={{ fontSize: "20px", padding: "20px" }}
        onClick={() => {
          setOpen(false);
        }}
      />
      {navlinks}

      <div>
        <hr />
        <span
          style={{
            color: "#4285F4",
            position: "relative",
            bottom: "0px",
            textAlign: "center"
          }}
        >
          Check our events
        </span>
      </div>
    </div>
  );
};
export default withRouter(SideNav);
