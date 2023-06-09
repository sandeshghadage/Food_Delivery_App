import React from "react";
import style from "./FoodCard.module.css";

export default function FoodCard({ foodImgUrl, name }) {
  return (
    <div className={style.card}>
      <img src={foodImgUrl} alt="" />
      <div className={style.cardFooter}>
        <div id={style.cardFooterText}>
          <div>{name}</div>
          <div>20$</div>
        </div>
        <div id={style.cardFooterDescription}>
          Ground turkey, cheese, hamburger buns, black pepper.
        </div>
      </div>
    </div>
  );
}
