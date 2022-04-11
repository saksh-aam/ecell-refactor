import React from "react";
import { BiBrain } from "react-icons/bi";
import { FaRegLightbulb } from "react-icons/fa";
import { BiRupee } from "react-icons/bi";
import { IoMdTrendingUp } from "react-icons/io";

const VisionCard = (props) => {
  return (
    <div className="flex flex-col  items-center card">
      {props.icon === "brain" && <BiBrain className="icon" />}
      {props.icon === "bulb" && <FaRegLightbulb className="icon" />}
      {props.icon === "rupee" && <BiRupee className="icon" />}
      {props.icon === "trendup" && <IoMdTrendingUp className="icon" />}

      <div className="cardtitle">{props.title}</div>
      <div className="text-justify p-[1.25rem]">{props.data}</div>
    </div>
  );
};

export default VisionCard;
