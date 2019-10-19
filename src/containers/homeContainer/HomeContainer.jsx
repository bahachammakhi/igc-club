import React, { useState } from "react";
import DescriptionSection from "../../components/descrption/DescriptionSection";
import Members from "../../components/descrption/members/Members";
import "./homecontainer.scss"

const HomeContainer = () => {
  return <div >
    <div className="description">
      <DescriptionSection />
    </div>
    <div className="members">
      <Members />
    </div>
  </div>;
};

export default HomeContainer;
