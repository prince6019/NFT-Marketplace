import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// internal import
import Style from "./SliderCard.module.css";
import images from "../../../img";
function SliderCard({ ele, i }) {
  return (
    <motion.div className={Style.sliderCard}>
      <div className={Style.sliderCard_box}>
        <motion.div className={Style.sliderCard_box_img}>
          <Image
            src={images.creatorbackground10}
            className={Style.sliderCard_box_img_img}
            alt="slider profile"
            width={400}
            height={300}
          />
        </motion.div>
        <div className={Style.sliderCard_box_title}>
          <p>NFT Video #{i + 1}</p>
          <div className={Style.sliderCard_box_title_like}>
            <small>{i + 4} 0f 100</small>
          </div>
        </div>
        <div className={Style.sliderCard_box_price}>
          <div className={Style.sliderCard_box_price_box}>
            <small>Current Bid</small>
            <p>{i + 2}.000 ETH</p>
          </div>
          <div className={Style.sliderCard_box_price_time}>
            <small>Reaming time</small>
            <p>
              {i + 1}h : 15m : {i + 4}0s
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default SliderCard;
