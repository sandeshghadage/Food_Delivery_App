import React from "react";
import { TiLocation } from "react-icons/ti";
import style from "./Logo.module.css";

export default function Logo({ size, fontSize }) {
  return (
    <div className={style.logo}>
      <TiLocation id={style.icon} style={{ height: size, width: size }} />
      <div style={{ fontSize: fontSize }}>Food Delivery</div>
    </div>
  );
}
