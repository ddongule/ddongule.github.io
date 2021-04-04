import React from "react";
import main from "../../styles/images/main.png";
import logo from "../../styles/images/logo.png";
import * as mainStyles from "./main.module.css";

export default function Main() {
  return (
    <div className={mainStyles.mainContainer}>
      <div className={mainStyles.mainlogo__div}>
        <img src={logo} className={mainStyles.mainlogo__img} alt="logo" />
      </div>
      <div className={mainStyles.sublogo__div}>
        <img src={main} className={mainStyles.sublogo__img} alt="main-image" />
      </div>
    </div>
  );
}
