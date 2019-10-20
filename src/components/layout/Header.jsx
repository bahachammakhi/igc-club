import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.jpg";
import { Icon } from "antd";
const objnav = [
  "Home",
  "Contact",
  "Notre équipe",
  "Qui sommes-nous",
  "Evénements"
];
const content = objnav.map(post => (
  <Link
    to="first"
    key={Math.floor(Math.random() * 10)}
    className="nav-btn"
    style={{ textDecoration: "none" }}
  >
    {post}
  </Link>
));

const Header = ({ match }) => {
  const content = objnav.map(post => (
    <Link to="first" className="nav-btn" style={{ textDecoration: "none" }}>
      {post}
    </Link>
  ));
  return (
    <div className="header">
      <img className="logo" alt="logo" src={Logo} />
      <div className="cn-btn">
        {content}
        <div className="media">
          <a href="http://www.google.com">
            <Icon type="facebook" className="logo-media" />
          </a>
          <a href="http://www.google.com">
            <Icon type="twitter" className="logo-media" />
          </a>
          <a href="http://www.google.com">
            <Icon type="instagram" className="logo-media" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default Header;
