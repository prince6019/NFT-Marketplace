import React from "react";

// ----internal import
import Style from "./Button.module.css";

function Button({ btnName }) {
  return <div className={Style.button}></div>;
}

export default Button;
