import React from "react";
import Image from "next/image";

// --internal import
import Style from "./Banner.module.css";

function Banner({ bannerImage }) {
  return (
    <div className={Style.banner}>
      <div className={Style.banner_img}>
        <Image src={bannerImage} alt="backgrounnd" width={1600} height={100} />
      </div>
    </div>
  );
}

export default Banner;
