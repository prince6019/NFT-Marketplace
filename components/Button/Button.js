import React from "react";

// ----internal import
import Style from "./Button.module.css";

function Button({ btnName, handleClick, icon }) {
  return (
    <div className={Style.box}>
      <button className={Style.button} onClick={() => handleClick}>
        {icon}
        {btnName}
      </button>
    </div>
  );
}

export default Button;
