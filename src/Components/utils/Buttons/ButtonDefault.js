import React from "react";
import style from "./Button.module.css";

export default function ButtonDefault(props) {
  return (
    <div
      className={style.defaultButtonBox}
      style={{ width: props.width, height: props.height }}
    >
      <div className={style.defaultButtonContent}>{props.name}</div>
    </div>
  );
}
