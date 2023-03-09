import React from "react";
import Image from "next/image";
import { DiJqueryLogo } from "react-icons/di";
import { useRouter } from "next/router";

//--internal import

import Style from "./Brand.module.css";
import images from "../../img";
import { Button } from "../componentIndex.js"
function Brand()  {
  return (
    <div className={Style.Brand}>
      <div className={Style.Brand_box}>
        <div className={Style.Brand_box_left}>
          <a href="/">
            <DiJqueryLogo className={Style.Brand_box_left_logo} />
          </a>
          <h1>Earn free crypto with Ciscrypt</h1>
          <p>A creative agency that lead and inspire.</p>

          <div className={Style.Brand_box_left_btn}>
            <Button
              btnName="Create"
            />
            <Button
              btnName="Discover"
            />
          </div>
        </div>
        <div className={Style.Brand_box_right}>
          <Image src={images.earn} alt="brand logo" width={800} height={600} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
