import React from "react";
import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Logo from "../../../utils/Logo/Logo";
import { BiSearch } from "react-icons/bi";
import { GiShoppingCart } from "react-icons/gi";
import ButtonDefault from "../../../utils/Buttons/ButtonDefault";

export default function Navbar() {
  return (
    <>
      <div className={style.Navbar}>
        <Logo />
        <nav>
          <ul className={style.NavTabs}>
            <li>
              <Link className={style.link} to="/home">
                Home
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/stores">
                Stores
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/menu">
                Menu
              </Link>
            </li>
            <li>
              <Link className={style.link} to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
        <div className={style.navbarRightComp}>
          <BiSearch className={style.searchIcon} />
          <GiShoppingCart className={style.cartIcon} />
          <ButtonDefault name={"Sign In"} />
        </div>
      </div>
    </>
  );
}
