import React from "react";
import Image from "next/image";
// ---internal import
import Style from "./LikeProfile.module.css";
import images from "../../img";
function LikeProfile({ ele }) {
  const imageArray = [1, 2, 3, 4];

  return (
    <div className={Style.like}>
      {imageArray.map((ele, i) => (
        <div className={Style.like_box} key={i + 1}>
          <Image
            src={images.user1}
            width={15}
            height={15}
            key={i + 1}
            className={Style.like_box_img}
          />
        </div>
      ))}
    </div>
  );
}

export default LikeProfile;
