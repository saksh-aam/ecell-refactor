import React from "react";
import VisionCard from "./VisionCard";
import VisionData from "./VisionData";
import "./vision.css";

const Vision = () => {
  return (
    <div className="main">
      <div>
        <h1 className="head">
          {" "}
          <span style={{ color: "white" }}>Our</span>{" "}
          <span style={{ color: "#FDCA40" }}>Vision</span>
        </h1>
        <p className="para">
          {" "}
          We aim to create a thirst for innovation and an ecosystem where
          students can think, learn and formulate a business plan of their own.
          Our purpose stands to help the aspiring entrepreneurs weave their
          stories of success by becoming the powerful business leaders they
          believe to be.
        </p>
      </div>
      <div className="py-8 px-8">
        <div className="flex flex-col lg:flex-row ">
          {VisionData.map((item) => {
            return (
              <VisionCard
                title={item.title}
                data={item.data}
                icon={item.icon}
                key={item.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Vision;
