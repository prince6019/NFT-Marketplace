import React from "react";

// ----internal import
import Style from "./Button.module.css";

function Button({ btnName, handleClick, icon }) {
  return (
    <>
      <button className={Style.button} onClick={() => handleClick()}>
        <span className={Style.button_icon}>{icon}</span>
        <span>{btnName}</span>
      </button>
    </>
  );
}

export default Button;
