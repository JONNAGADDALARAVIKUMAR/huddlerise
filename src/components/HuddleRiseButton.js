import React from "react";
import "./HuddleRiseButton.css";

const HuddleRiseButton = ({ handleOnClick, title, titleClass }) => {
  return (
    <div onClick={handleOnClick} className="container">
      <div className={titleClass ? titleClass : "button-title"}>{title}</div>
    </div>
  );
};

export default HuddleRiseButton;
