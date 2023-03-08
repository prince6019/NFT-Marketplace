import React from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

// --internal import
import Style from "./DaysComponent.module.css";
import images from "../../../img";

function DaysComponent({ ele, i }) {
  return (
    <div className={Style.daysComponent}>
      <div className={Style.daysComponent_box}>
        <div className={Style.daysComponent_box_img}>
          <Image
            src={ele.background}
            className={Style.daysComponent_box_img_img}
            alt="profile background"
            width={500}
            height={300}
          />
        </div>

        <div className={Style.daysComponent_box_profile}>
          <Image
            src={images[`creatorbackground${i + 2}`]}
            alt="profile"
            width={100}
            height={100}
            className={Style.daysComponent_box_img_1}
          />
          <Image
            src={images[`creatorbackground${i + 4}`]}
            alt="profile"
            width={100}
            height={100}
            className={Style.daysComponent_box_img_2}
          />
          <Image
            src={images[`creatorbackground${i + 3}`]}
            alt="profile"
            width={100}
            height={100}
            className={Style.daysComponent_box_img_3}
          />
        </div>

        <div className={Style.daysComponent_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponent_box_title_info}>
            <div className={Style.daysComponent_box_title_info_profile}>
              <Image
                src={ele.user}
                alt="profile"
                width={30}
                height={30}
                className={Style.daysComponent_box_title_info_profile_img}
              />

              <p>
                Creator
                <span>
                  Shoaib Bhai
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>

            <div className={Style.daysComponent_box_title_info_price}>
              <small>{i + 4}.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DaysComponent;
