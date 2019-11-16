import React from "react";
import { withRouter, Link } from "react-router-dom";
import "./header.css";
import Logo from "./logo.jpg";
import { Icon } from "antd";
const objnav = [
  { name: "Accueil", path: "#/" },
  { name: "Contact", path: "#contact" },
  { name: "Notre équipe", path: "#members" },
  { name: "Qui sommes-nous", path: "#about" },
  { name: "Evénements", path: "#events" }
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

const Header = ( match ) => {
  



  const content = objnav.map(post => {
    return (
      <a
        href={post.path}
        className="nav-btn"
        style={{ textDecoration: "none" }}
      >
        {post.name}
      </a>
    );
  });
  return (
    <div className="header">
       <a
      href="#/"
      >
      <img className="logo" alt="logo" src={Logo} />
      </a>
      <div className="cn-btn">
        {content}
        <div className="media">
          <a  rel="noopener noreferrer" target="_blank" hre href="http://www.google.com">
            <Icon type="facebook" className="logo-media" />
          </a>
          <a  rel="noopener noreferrer" target="_blank" href="http://www.google.com">
            <Icon type="twitter" className="logo-media" />
          </a>
          <a  rel="noopener noreferrer" target="_blank" hre href="http://www.google.com">
            <Icon type="instagram" className="logo-media" />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};
export default withRouter(Header);
