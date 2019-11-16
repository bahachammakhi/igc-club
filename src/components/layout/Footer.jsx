import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import Logo from "./logo.jpg";
import "./Footer.css";
const objnav = [
  { name: "Accueil", path: "#/" },
  { name: "Contact", path: "#contact" },
  { name: "Notre équipe", path: "#members" },
  { name: "Qui sommes-nous", path: "#about" },
  { name: "Evénements", path: "#events" }
];

const content = objnav.map(post => {
  return (
    <a
      href={post.path}
      key={Math.floor(Math.random() * 10)}
      style={{ textDecoration: "none" }}
    >
      <div className="child"> {post.name}</div>
    </a>
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
         igc.istic@gmail.com
        </div>
        <div className="childds">
          {" "}
          <Icon
            type="phone"
            style={{ fontSize: "15px", color: "grey", marginRight: "5px" }}
          />
          Tel : 216 96171678
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
