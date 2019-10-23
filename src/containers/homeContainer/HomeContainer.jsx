import React, { useState } from "react";
import DescriptionSection from "../../components/descrption/DescriptionSection";
import Members from "../../components/members/Members";
import classes from "./homecontainer.module.scss";
import Partners from "../../components/partners/Partners";
import About from "../../components/about/About";
import logo from "./../../assets/logo.jpg";
import Stat from "../../components/layout/stat"
import TimelineUpcoming from "../../components/timeline/TimelineUpcoming";

const aboutsData = [
  {
    title: "A PROPOS IGC",
    img: logo,
    details:
      "Istic Google Club est un club crée par l’initiative d’un groupe d’étudiants de l'institut supérieur des technologies de l'information et de la communication en 23 février 2017, il est ciblé à tous les étudiants de l'istic avec leur différente spécialité et il rassemble actuellement une trentaine de membres."
  },
  {
    title: "NOTRE ACTIVITE",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72437360_1342170412608579_2013478336197558272_n.jpg?_nc_cat=106&_nc_oc=AQn1f81Qr32dTVsCgQvct8eV4F5286dCDi4cxDBUCM3sofX8TCfTtn4RLbySkHDZ1kQ&_nc_ht=scontent.ftun2-1.fna&oh=bc1b8f1bd8546d8118ecf177bb5f13a6&oe=5E251AEC",
    details:
      "Le but principal de ce club est de promouvoir, dans l’intérêt de nos membres, l’utilisation des outils et des technologies de développement fournis par Google librement tout en innovant sans limites. IGC permet de L’initiation et le perfectionnement des étudiants dans les langages de programmation,le soutien pédagogique et ma vulgarisation des technologies de l’Informatique. Donc l’objectif de ce club sera de créer une communauté apte à représent."
  },
  {
    title: "NOTRE MISSION",

    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72100207_1342171269275160_38824352577224704_n.jpg?_nc_cat=106&_nc_oc=AQkth6Yc8fN0FupyR34pN8JPGXWa3bxOxkqklJIVhStU6tKDp588e0KjbEoDuEtVdIs&_nc_ht=scontent.ftun2-1.fna&oh=c2d23b73a51028a0115c38c08d26f09d&oe=5E28A99C",
    details:
      "IGC permet de dynamiser la vie etudiante en assurant le développement personnel des étudiants dans le but de les préparer à une meilleure insertion professionnelle."
  },
  {
    title: "NOTRE ACTIVITE",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72437360_1342170412608579_2013478336197558272_n.jpg?_nc_cat=106&_nc_oc=AQn1f81Qr32dTVsCgQvct8eV4F5286dCDi4cxDBUCM3sofX8TCfTtn4RLbySkHDZ1kQ&_nc_ht=scontent.ftun2-1.fna&oh=bc1b8f1bd8546d8118ecf177bb5f13a6&oe=5E251AEC",
    details:
      "Le but principal de ce club est de promouvoir, dans l’intérêt de nos membres, l’utilisation des outils et des technologies de développement fournis par Google librement tout en innovant sans limites. IGC permet de L’initiation et le perfectionnement des étudiants dans les langages de programmation,le soutien pédagogique et ma vulgarisation des technologies de l’Informatique. Donc l’objectif de ce club sera de créer une communauté apte à représent."
  }
];

const abouts = aboutsData.map((el, n) => {
  // if (window.innerWidth < 768) {
  // }
  let direction = "";
  const directionstatus = () => {
    if (n % 2 === 0) {
      if (window.innerWidth < 768) {
        direction = "colmun-reverse";
      } else {
        direction = "row-reverse";
      }
    }
  };
  directionstatus();

  return (
    <div className={classes.about}>
      <About
        direction={direction}
        title={el.title}
        details={el.details}
        img={el.img}
      />
    </div>
  );
});

const HomeContainer = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.description}>
        <DescriptionSection />
      </div>
      <div className={classes.timeline}>
      <TimelineUpcoming />
      </div>
      <div className={classes.about}>{abouts}</div>
      <div className={classes.members}>
        <Members />
      </div>
      <div>
        <Stat />
        </div>
      <div className={classes.partners}>
        <Partners />
      </div>
    </div>
  );
};

export default HomeContainer;
