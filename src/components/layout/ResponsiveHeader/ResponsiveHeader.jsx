import React, { useState } from "react";
import { Icon } from "antd";

//Components
import SideNav from "./SideNav/SideNav";
import classes from  "./responsiveHeader.module.scss";
import logo from "../logo.jpg";

const ResponsiveHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className={classes.nav}>
      <Icon
        type="right"
        style={{
          fontSize: "30px",
          color: "#333333",
          padding: "15px"
        }}
        onClick={() => {
          setOpened(true);
        }}
      />
      <div className={classes.icons}>
        <a href="www.facebook.com" target="_blank">
          <Icon type="facebook" style={{ color: "black", cursor: "pointer" }} />
        </a>
        <a href="www.facebook.com" target="_blank">
          <Icon
            type="twitter"
            style={{ paddingLeft: "10px", color: "black", cursor: "pointer" }}
          />
        </a>
        <a href="www.facebook.com" target="_blank">
          <Icon
            type="instagram"
            style={{ paddingLeft: "10px", color: "black", cursor: "pointer" }}
          />
        </a>
      </div>

      <img
        src={logo}
        style={{
          width: "70px",
          position: "relative",
          right: "0",
          margin: "5px"
        }}
        alt="Logo"
      />

      <div className={classes.sidenav}>
        {opened ? (
          <div
            style={{ height: "700px" }}
            className=" sidenav animated slideInLeft"
          >
            <SideNav
              setOpen={setOpened}
              navitems={["About", "Forum", "Info"]}
            />{" "}
          </div>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
};

export default ResponsiveHeader;
