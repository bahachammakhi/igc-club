import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import Logo from "./logo.jpg";
import "./Footer.css";
const objnav = [
  "Home",
  "Contact",
  "Notre équipe",
  "Qui sommes-nous",
  "Evénements"
];
const content = objnav.map(post => {
  return (
    <Link
      to="first"
      key={Math.floor(Math.random() * 10)}
      style={{ textDecoration: "none" }}
    >
      <div className="child"> {post}</div>
    </Link>
  );
});
const Footer = () => {
  return (
    <div className="cn-footer">
      <div className="grid-item">
        <div className="titles">PRODUCT</div>
        {content}
      </div>
      <div className="grid-item">
        <div className="titles">ABOUT US</div>
        <div className="child">Privacy Policy</div>
        <div className="child">Terms and Conditions</div>
      </div>
      <div className="grid-item">
        {" "}
        <div className="titles">CONTACT US</div>
        <div className="child">
          {" "}
          <Icon
            type="mail"
            style={{ fontSize: "15px", color: "grey", marginRight: "5px" }}
          />
          hakimmaaouai@gmail.com
        </div>
        <div className="childds">
          {" "}
          <Icon
            type="phone"
            style={{ fontSize: "15px", color: "grey", marginRight: "5px" }}
          />
          Tel : 25605102
        </div>
      </div>

      <div className="grid-item" style={{ textAlign: "center" }}>
        <img src={Logo} className="logos" alt="eara" />
        <div className="childds" style={{ marginTop: "25px" }}>
          Copyright @ 2019 Istic google club
        </div>
        <div className="childds">All rights reserved</div>
      </div>
    </div>
  );
};
export default Footer;
