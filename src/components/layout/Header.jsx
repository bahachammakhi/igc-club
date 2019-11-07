import React from "react";
import { withRouter,Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.jpg";
import { Icon } from "antd";
const objnav = [
  "Accueil",
  "Contact",
  "Notre équipe",
  "Qui sommes-nous",
  "Evénements"
];
// const content = objnav.map(post => {

//   return(
//   <Link
//     to="first"
//     key={Math.floor(Math.random() * 10)}
//     className="nav-btn"
//     style={{ textDecoration: "none" }}
//   >
//     {post}
//   </Link>
// )});

const Header = ({ match }) => {
  console.log(match)
  const content = objnav.map(post => {
    if (post === "Accueil" && match.path === "/") {
      return (
        <Link
          to="/"
          className="nav-btn"
          style={{ textDecoration: "none", color: "#4885ed" }}
        >
          {post}
        </Link>
      );
    }else if(post ==="Contact" && match.path === "/") {
      return(
        <a href="#contact" className="nav-btn" >
          Contact
        </a>
      )
    } else {
      return (
        <Link to="/" className="nav-btn" style={{ textDecoration: "none" }}>
          {post}
        </Link>
      );
    }
  });
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
export default withRouter(Header);
