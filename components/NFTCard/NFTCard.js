import React, { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

// ---internal import
import Style from "./NFTCard.module.css";
import images from "../../img";

function NFTCard() {
  const [like, setLike] = useState([true, true, true, true, true, true]);

  const CardArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];

  const likeNft = (i) => {
    let newArr = [...like];
    newArr[i] = !newArr[i];
    setLike(newArr);
  };

  return (
    <div className={Style.NFTCard}>
      {CardArray.map((ele, i) => (
        <div className={Style.NFTCard_box} key={i + 1}>
          {/* {console.log(i)} */}
          <div className={Style.NFTCard_box_img}>
            <Image
              src={ele}
              alt="NFT images"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_box_update_left_like}
                onClick={() => likeNft(i)}
              >
                {like[i] ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}
                {""} 22
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remaining time</small>
                <p>3h : 15m : 20s</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>NFt video #11224</h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>1000ETH</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>
            <div className={Style.NFTCard_box_update_details_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default NFTCard;
