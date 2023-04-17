import React from "react";
import style from "./ReviewContainer.module.css";
import { AiFillStar } from "react-icons/ai";

export default function ReviewContainer() {
  const imgUrl = [
    "https://images.pexels.com/photos/5461433/pexels-photo-5461433.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    "https://images.pexels.com/photos/1839904/pexels-photo-1839904.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2774197/pexels-photo-2774197.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className={style.reviewContainer}>
      <div className={style.profileContainer}>
        <div className={style.reviewProfile} style={{ right: "0px" }}>
          <img src={imgUrl[0]} alt="" />
        </div>
        <div className={style.reviewProfile} style={{ right: "25px" }}>
          <img src={imgUrl[1]} alt="" />
        </div>
        <div className={style.reviewProfile} style={{ right: "50px" }}>
          <img src={imgUrl[2]} alt="" />
        </div>

        <div className={style.reviewProfile} style={{ right: "75px" }}>
          <img src={imgUrl[3]} alt="" />
        </div>
      </div>
      <div className={style.reviewDetails}>
        <div className={style.reviewFontClass}>Our Happy Customer</div>
        <div className={style.reviewSection}>
          <AiFillStar className={style.starIcon} />
          <div className={style.reviewFontClass}>4.9</div>
          <div className={style.reviewFontClass} style={{ fontWeight: "400" }}>
            (10.2K Review)
          </div>
        </div>
      </div>
    </div>
  );
}
