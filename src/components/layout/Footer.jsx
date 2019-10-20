import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import Logo from "./logo.jpg";
import "./Footer.css";
const Footer = () => {
return(
<div className="cn-footer">
<div className="grid-item">
    <div className="titles">
    PRODUCT
        </div>
        <div className="child">Home</div>
        <div className="child">Contact</div>
        <div className="child">Notre équipe</div>
        <div className="child">Qui sommes-nous</div>
        <div className="child">Evénements</div>
</div>
<div className="grid-item">
     <div className="titles">
    PRODUCT
        </div>
<div className="child">Privacy Policy</div>
<div className="child">Terms and Conditions</div>


        </div>
<div className="grid-item"> <div className="titles">
CONTACT US
        </div>
        <div className="child" > <Icon type="mail" />hakimmaaouai@gmail.com</div>
        </div>

<div className="grid-item" style={{  textAlign: 'center' }}> 

<img src={Logo} className="logos" alt="eara"/>
<div> Copyright @ 2019 Istic google club</div>
<div>All rights reserved</div>
        </div>
</div>
);
} ;
export default Footer