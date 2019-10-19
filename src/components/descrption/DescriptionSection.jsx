import React, { useState, useEffect } from "react";
import "./descriptionsection-style.scss";
import { Button } from "antd";

const object = [
  {
    description: "Prendre part à des projets captivants",
    smalldescription: "Prendre part à des projets captivants1",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72438494_1343236715835282_207921651721961472_n.jpg?_nc_cat=103&_nc_oc=AQnSCn6UvFqoRQwJh4vszy325wJ2_KZDo7l6ot2c1n3CPGi-M9YrcR86bp3vg_eB_TE&_nc_ht=scontent.ftun2-1.fna&oh=e6d509c6d145fac97341a8a3bb9bb6c8&oe=5E3115F8"
  },
  {
    description: "Favoriser le partage de connaissances",
    smalldescription:
      "entre les étudiants de différents niveaux et de différents départements",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/73416018_1343246445834309_3380757926221185024_n.jpg?_nc_cat=105&_nc_oc=AQlZDNdRW33nLT6yLprqp2XltNyy_5ZWtHlEZUdJcwl4AvoJukTopFPvmqaskWfAXDw&_nc_ht=scontent.ftun2-1.fna&oh=bf73f66c2fb0e25384418b3a01936e51&oe=5E1ACE74"
  },
  {
    description: "Acquérir de l’expérience",
    smalldescription: "et renforcer les compétences",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72438494_1343236715835282_207921651721961472_n.jpg?_nc_cat=103&_nc_oc=AQnSCn6UvFqoRQwJh4vszy325wJ2_KZDo7l6ot2c1n3CPGi-M9YrcR86bp3vg_eB_TE&_nc_ht=scontent.ftun2-1.fna&oh=e6d509c6d145fac97341a8a3bb9bb6c8&oe=5E3115F8"
  }
];

const DescriptionSection = () => {
  const [currentObject, setobject] = useState(0);

  useEffect(() => {
    const myVar = setInterval(() => {
      if (currentObject === 2) {
        setobject(0);
      } else {
        setobject(currentObject + 1);
      }
    }, 7000);
    document.addEventListener("visibilitychange", function() {
      console.log(document.visibilityState);
      if (document.visibilityState === "hidden") clearInterval(myVar);
      if (document.visibilityState === "visible") {
        // document.location.reload();
      }
    });
  });
  return (
    <div className="wrapper">
      <div className="texts">
        <span className="title">{object[currentObject].description}</span>
        <span className="smalldescription">
          {object[currentObject].smalldescription}
        </span>
        <div className="button">
          <Button className="button">Contact us</Button>
        </div>
      </div>

      <img
        className="imgs animated pulse"
        src={object[currentObject].img}
        alt="pic"
      />
    </div>
  );
};

export default DescriptionSection;
