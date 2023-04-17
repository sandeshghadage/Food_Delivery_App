import React from "react";
import style from "./Button.module.css";

export default function ButtonOutlined(props) {
  return (
    <div
      className={style.OutlinedButtonBox}
      style={{ width: props.width, height: props.height }}
    >
      <div className={style.outlinedButtonContent}>{props.name}</div>
    </div>
  );
}
