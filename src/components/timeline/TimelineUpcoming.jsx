import React, { useState } from "react";
import { Timeline, Icon, Popover, Modal } from "antd";
import classes from "./timeline.module.scss";
import pic from "./../../assets/timeline.jpg"

const Data = [
  {
    name: "Hash code",
    date: "02/03/2019",
    details:
      "Python est un langage de programmation puissant et facile à apprendre. Cest lun des langages populaires utilisés par les praticiens de DevOps comme dans de nombreux outils. Tous les étudiants de notre institut devraient suivre cet atelier pour exceller dans leur travail.."
  },
  {
    name: "Workshop ReactJS",
    date: "07/05/2020",
    details:
      "Python est un langage de programmation puissant et facile à apprendre. Cest lun des langages populaires utilisés par les praticiens de DevOps comme dans de nombreux outils. Tous les étudiants de notre institut devraient suivre cet atelier pour exceller dans leur travail.."
  },
  {
    name: "Workshop Nodejs",
    date: "12/03/2020",
    details:
      "Python est un langage de programmation puissant et facile à apprendre. Cest lun des langages populaires utilisés par les praticiens de DevOps comme dans de nombreux outils. Tous les étudiants de notre institut devraient suivre cet atelier pour exceller dans leur travail.."
  },
  {
    name: "HTML/CSS/JS",
    date: "15/04/2020",
    details:
      "Python est un langage de programmation puissant et facile à apprendre. Cest lun des langages populaires utilisés par les praticiens de DevOps comme dans de nombreux outils. Tous les étudiants de notre institut devraient suivre cet atelier pour exceller dans leur travail.."
  }
];

const TimelineUpcoming = () => {
  const [visible, handleVisible] = useState(false);
  const [modalData, handleModalData] = useState({
    name: "notitle",
    date: "not found",
    details: "No details"
  });
  const TimelineItems = Data.map((el, n) => {
    let direction = "right";
    if (n % 2 === 0) {
      direction = "left";
    }
    return (
      <Timeline.Item
        dot={
          <Popover
            content={
              <div className={classes.popover}>
                Click to know more about the event
              </div>
            }
            placement={direction}
          >
            <Icon
              onClick={() => {
                handleVisible(true);
                handleModalData(el);
              }}
              type="question-circle"
              style={{ fontSize: "26px" }}
            />
          </Popover>
        }
      >
        <div  onClick={() => {
                handleVisible(true);
                handleModalData(el);
              }} className={classes.content} style={{ margin: "10px" }}>
          <b>{el.name}</b> {el.date}
        </div>
      </Timeline.Item>
    );
  });

  return (
    <div className={classes.wrapper}>
      <Modal
        title={modalData.name}
        visible={visible}
        onOk={() => handleVisible(false)}
        onCancel={() => handleVisible(false)}
      >
        <p>{modalData.date}</p>
        <p>{modalData.details}</p>
      </Modal>
      <p className={classes.title}>Upcoming events</p>
      <div className={classes.body}>
          <img src={pic} className={classes.img} alt="img" />
        <Timeline className={classes.timeline} pending="Planning..." mode="alternate">
          {TimelineItems}
        </Timeline>
      </div>
    </div>
  );
};

export default TimelineUpcoming;
