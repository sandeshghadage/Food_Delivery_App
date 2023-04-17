import * as React from "react";
import style from "./Footer.module.css";
import Logo from "./../../../utils/Logo/Logo";
import { TiLocation } from "react-icons/ti";
import { FiPhoneCall } from "react-icons/fi";
import { HiMail } from "react-icons/hi";
import { RiFacebookCircleFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import WhiteSpace from "../../../utils/WhiteSpace";

export default function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.addressBox}>
          <Logo size="80px" fontSize="18px" />
          <div
            style={{ fontWeight: "500", color: "#555555", fontSize: "15px" }}
          >
            We are focoused on being the best helping hand to the local
            businesses
          </div>
          <small style={{ fontWeight: "300" }}>
            @2022 - 2023 food delivery
          </small>
        </div>
        <div className={style.footerColumn}>
          <main>Quick Links</main>
          <div>Home</div>
          <div>Featured Food</div>
          <div>Stores</div>
          <div>Menu</div>
        </div>
        <div className={style.footerColumn}>
          <main>Support</main>
          <div>Privacy Policy</div>
          <div>Term of use</div>
          <div>FAQ's</div>
        </div>
        <div className={style.footerColumn}>
          <main>Contact</main>
          <div className={style.textWithLogo}>
            <TiLocation /> Pune, Maharashtra
          </div>
          <div className={style.textWithLogo}>
            {" "}
            <FiPhoneCall />
            +91 98765 43210
          </div>
          <div className={style.textWithLogo}>
            <HiMail />
            delivery@food.com
          </div>
        </div>
        <div className={style.footerColumn}>
          <main>Follow us on</main>
          <div className={style.textWithLogo}>
            <RiFacebookCircleFill />
            Facebook
          </div>
          <div className={style.textWithLogo}>
            <AiOutlineTwitter />
            Twitter
          </div>
          <div className={style.textWithLogo}>
            <AiOutlineInstagram />
            Instagram
          </div>
        </div>
      </footer>
      <WhiteSpace height="2rem" />
    </>
  );
}
