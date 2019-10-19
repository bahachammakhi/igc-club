import React, { useState, useEffect } from "react";
import ItemsCarousel from "react-items-carousel";
import { Card, Icon, Avatar, Button, Col } from "antd";
import "./members.style.scss";
import { useDidMount } from "../../../hooks/useLifeCycle";
const { Meta } = Card;

const memeber = [
  {
    name: "bahachammakhi",
    age: "19",
    section: "LART",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/70886437_2356062261274352_5646167786892820480_n.jpg?_nc_cat=108&_nc_oc=AQmS3ktqgwCdAvp8iqco2yyQpv-6Jb7DozDM3RViepoiWlgcSg4VZt0nHba9XWSLW1s&_nc_ht=scontent.ftun2-1.fna&oh=68f09762da5aef0905cdf4424e8bd911&oe=5E5EEC06"
  },
  {
    name: "omar mhiri",
    age: "19",
    section: "LART",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/72047030_1342171062608514_5916860381350854656_o.jpg?_nc_cat=108&_nc_oc=AQmOAjfgvaFjYXmQaUfjV2etXrWTm8iIunFgREFn-1CKxgO9TlsmuS44Q1Po5X1JTmM&_nc_ht=scontent.ftun2-1.fna&oh=d77d5481e7ada69b5b5f29f3549cb932&oe=5E5B64CE"
  },
  {
    name: "malek",
    age: "19",
    section: "LART",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/71912751_2757050697658891_1863866685199482880_n.jpg?_nc_cat=109&_nc_oc=AQlFT1z4u2Jfv5cb0upeIt-FVqkeGh7Uxfa2t4Uq7YcXQ0L73BtL-FxDZ4ishGiCPQ8&_nc_ht=scontent.ftun2-1.fna&oh=f601f25bcc554380984300a3e4e38164&oe=5E636087"
  },
  {
    name: "malek",
    age: "19",
    section: "LART",
    img:
      "https://scontent.ftun2-1.fna.fbcdn.net/v/t1.0-9/71912751_2757050697658891_1863866685199482880_n.jpg?_nc_cat=109&_nc_oc=AQlFT1z4u2Jfv5cb0upeIt-FVqkeGh7Uxfa2t4Uq7YcXQ0L73BtL-FxDZ4ishGiCPQ8&_nc_ht=scontent.ftun2-1.fna&oh=f601f25bcc554380984300a3e4e38164&oe=5E636087"
  }
];

const Members = () => {
  const [activeitem, changeActiveItem] = useState(0);
  const [nbcards,setNbcards] = useState(3);

  useDidMount(()=>{
   if(window.innerWidth <768){
    setNbcards(1)
  } 
  })
  
  const handleActiveItem = item => {
    changeActiveItem(item);
    clearTimeout(vart);
  };
  const vart = setTimeout(() => {
    if (activeitem < memeber.length / 3) {
      changeActiveItem(activeitem + 1);
    } else {
      changeActiveItem(0);
    }
  }, 4000);

  const children = memeber.map(el => {
    return (
      <div>
        <Card
          style={{ width: 300 }}
          cover={<img alt="example" src={el.img} />}
          actions={[
            <Icon type="instagram" key="setting" />,
            <Icon type="facebook" key="edit" />,
            <Icon type="linkedin" key="ellipsis" />
          ]}
        >
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={el.name}
            description={el.section}
          />
        </Card>
      </div>
    );
  });
  return (
    <ItemsCarousel
      // Placeholder configurations
      enablePlaceholder
      numberOfPlaceholderItems={5}
      minimumPlaceholderTime={1000}
      placeholderItem={
        <div style={{ height: 200, background: "#900" }}>Placeholder</div>
      }
      // Carousel configurations
      numberOfCards={nbcards}
      gutter={12}
      showSlither={true}
      firstAndLastGutter={true}
      freeScrolling={false}
      // Active item configurations
      requestToChangeActive={handleActiveItem}
      activeItemIndex={activeitem}
      activePosition={"center"}
      chevronWidth={24}
      rightChevron={
        <Button shape="circle">
          <Icon type="right" />
        </Button>
      }
      leftChevron={
        <Button shape="circle">
          <Icon type="left" />
        </Button>
      }
      outsideChevron={false}
    >
      {children}
    </ItemsCarousel>
  );
};

export default Members;
