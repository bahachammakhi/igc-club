import React, { useState } from "react";
import { Icon } from "antd";

//Components
import SideNav from "./SideNav/SideNav";
import "./responsiveHeader-style.scss";
import logo from "../logo.jpg";

const ResponsiveHeader = () => {
  const [opened, setOpened] = useState(false);
  return (
    <div className="nav">
      <Icon
        type="right"
        style={{
          fontSize: "30px",
          fontWeight: "bolder",
          color: "#333333",
          textAlign: "center",
          fontStyle: "italic",
          padding: "15px"
        }}
        onClick={() => {
          setOpened(true);
        }}
      />
      <div className="icons">
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
      <div  style={{position:"absolute" , right:"0",padding:"10px"}}>
        <img src={logo} style={{ width: "70px" }} alt="Logo" />
      </div>
      <div className="sidenav">
        {opened ? (
          <div style={{ height: "700px" }} className="animated slideInLeft">
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
