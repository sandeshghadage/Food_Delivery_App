import React from "react";
import style from "./Signup.module.css";
import InputBox from "../../utils/InputBox/InputBox";

export default function Signup() {
  return (
    <>
      <div className={style.mainBox}>
        <form>
          <InputBox />
          <InputBox />
          <InputBox />
        </form>
      </div>
    </>
  );
}
