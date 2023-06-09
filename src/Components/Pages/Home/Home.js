import * as React from "react";
import style from "./Home.module.css";
import ButtonDefault from "../../utils/Buttons/ButtonDefault";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import WhiteSpace from "../../utils/WhiteSpace";
import FoodCard from "./Local-Components/FoodCard";
import ButtonOutlined from "../../utils/Buttons/ButtonOutlined";
import ReviewContainer from "./Local-Components/Review-Container/ReviewContainer";

export default function Home() {
  const heroImgUrl =
    "https://www.pngarts.com/files/7/Food-Delivery-Service-PNG-Image-Background.png";

  const foodImgUrl = [
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1639556/pexels-photo-1639556.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/397913/pexels-photo-397913.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <>
      <div className={style.mainBox}>
        <WhiteSpace height="11em" />
        <div className={style.heroContainer}>
          <div className={style.heroContent}>
            <div className={style.heroText}>
              Your Favourite Food{" "}
              <span style={{ color: "#f54749" }}>Delivery</span> Partner
            </div>
            <div className={style.heroSubtitle}>
              We are focoused on being the best helping hand to the local
              businesses
            </div>
            <div className={style.orderBtn}>
              <ButtonDefault width={"200px"} height={"65px"} name="Order Now" />
            </div>
            <ReviewContainer />
          </div>
          <img id={style.heroImg} src={heroImgUrl} alt="altimage" />
        </div>

        <Grid container my={20} spacing={4}>
          <Grid item xs={4}>
            <Box>
              <FoodCard foodImgUrl={foodImgUrl[0]} name={"365 Easy Salad"} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FoodCard foodImgUrl={foodImgUrl[1]} name={"Panasian"} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FoodCard
                foodImgUrl={foodImgUrl[2]}
                name={"Peanut Butter sandwich"}
              />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FoodCard foodImgUrl={foodImgUrl[3]} name={"Chocolate Brownie"} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FoodCard foodImgUrl={foodImgUrl[4]} name={"Shrimp Pasta"} />
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box>
              <FoodCard foodImgUrl={foodImgUrl[5]} name={"Italian Sandwich"} />
            </Box>
          </Grid>
        </Grid>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <ButtonOutlined name={"See all food"} width="180px" />
        </div>
        <WhiteSpace height="14rem" />
        <div className={style.bestServiceSection}>
          <img
            id={style.heroImg}
            src="https://png.pngtree.com/png-vector/20230124/ourmid/pngtree-delivery-bike-png-image_6572041.png"
            alt="altimage"
          />
          <div className={style.bestServiceContent}>
            <div
              style={{
                color: "#f54749",
                fontSize: "22px",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              FOOD DELIVERY
            </div>
            <div className={style.bestServiceText}>
              Best Service to fulfill your expectations
            </div>
            <div className={style.heroSubtitle}>
              It's not just about bringing you good food from your Favourite
              restaurant. It's about making a connection
            </div>
            <div className={style.orderBtn}>
              <ButtonDefault width={"200px"} height={"65px"} name="Read More" />
            </div>
          </div>
        </div>
        <WhiteSpace height="14rem" />
        <div className={style.bestServiceSection}>
          <div className={style.bestServiceContent}>
            <div
              style={{
                color: "#f54749",
                fontSize: "22px",
                fontWeight: "500",
                marginBottom: "1rem",
              }}
            >
              About us
            </div>
            <div className={style.bestServiceText}>
              Dedicated to Delight you
            </div>
            <div className={style.heroSubtitle}>
              Customer delight is the process of surrpassing customers
              expectation to build a long-term positive experience around your
              product and service
            </div>
            <div className={style.orderBtn}>
              <ButtonDefault width={"200px"} height={"65px"} name="Read More" />
            </div>
          </div>
          <img
            id={style.heroImg}
            src="https://cdni.iconscout.com/illustration/premium/thumb/doorstep-delivery-4490968-3726859.png"
            alt="altimage"
          />
        </div>
        <WhiteSpace height="14rem" />
      </div>
      {/* Black section */}
      <div>
        <div className={style.blackSection}>
          <img
            id={style.heroImg}
            src="https://www.pngall.com/wp-content/uploads/12/Delivery-Scooter-PNG-Image.png"
            alt="altimage"
          />
          <div className={style.bestServiceContent}>
            <div
              className={style.bestServiceText}
              style={{ color: "white", fontWeight: "500" }}
            >
              We Deliver as fast as you expect
            </div>
            <div className={style.heroSubtitle} style={{ color: "white" }}>
              Fast Deliver is a fast groving and promissing courier and parcel
              service in India with excellent customer service.
              <br /> Customers can count on us to deliver
            </div>
            <div className={style.addressInput}>
              <input placeholder="Enter your address" />
              <ButtonDefault width={"160px"} height={"65px"} name="Submit" />
            </div>
          </div>
        </div>
        <WhiteSpace height="7rem" />
      </div>
    </>
  );
}
