import React from "react";
import Image from "next/image";

// ---internal import
import Style from "./NftTabs.module.css";

function NftTabs({ dataTab, icon }) {
  return (
    <div className={Style.NFTTabs}>
      {dataTab.map((ele, i) => (
        <div className={Style.NFTTabs_box} key={i + 1}>
          <Image
            src={ele}
            alt="profile image"
            width={40}
            height={40}
            className={Style.NFTTabs_box_img}
          />
          <div className={Style.NFTTabs_box_info}>
            <span>
              Offer by $770 by <span>Prince Bhai</span>
              {icon}
            </span>

            <small>Jun 14 - 4:12 PM</small>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NftTabs;
