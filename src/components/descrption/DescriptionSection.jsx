import React, { useState, useEffect } from "react";
import classes from "./descriptionsection.module.scss";
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
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72780315_1342171885941765_290347202323152896_n.jpg?_nc_cat=110&_nc_oc=AQnGHfA-Q3pnz4i_eVLkZX8tJY0ulLIySIYNKgSBy4_pHNkKN8To0RqSEo0-JvTX9DA&_nc_ht=scontent.ftun2-1.fna&oh=1eb85ffdb5b3a9b558ab726d43bd58c2&oe=5E1BFA64"
  }
];

const DescriptionSection = () => {
  const [currentObject, setobject] = useState(0);
  const [currentData, setData] = useState(object[0]);

  useEffect(() => {
    const myVar = setTimeout(() => {
      if (currentObject < 3) {
        setData(object[currentObject]);
        setobject(currentObject + 1);
      } else {
        setobject(0);
        clearTimeout(myVar);
      }
    }, 3000);

    // document.addEventListener("visibilitychange", function() {
    //   console.log(document.visibilityState);
    //   if (document.visibilityState === "hidden") clearInterval(myVar);
    //   if (document.visibilityState === "visible") {
    //     setData(object[0]);
    //   }
    // });
  });
  return (
    <div className={classes.wrapper}>
      <div className={classes.texts}>
        <span className={classes.title}>{currentData.description}</span>
        <span className={classes.smalldescription}>
          {currentData.smalldescription}
        </span>

        <Button className={classes.button}>Contact us</Button>
      </div>

      <img
        className={`${classes.imgs} animated pulse`}
        src={currentData.img}
        alt="pic"
      />
    </div>
  );
};

export default DescriptionSection;
