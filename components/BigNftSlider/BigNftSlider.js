import React, { useCallback, useState } from "react";
import Image from "next/image";

//------ internal import
import Style from "./BigNftslider.module.css";
import images from "../../img";
import { Button } from "web3uikit";
// --icons import
import { AiFillFire, AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { MdVerified, MdTimer } from "react-icons/md";
import { TbArrowBigLeftLines, TbArrowBigRightLine } from "react-icons/tb";

function BigNftSlider() {
  const [idNumber, setIdNumber] = useState(0);

  const sliderData = [
    {
      title: "Hello NFT",
      id: 1,
      name: "Aman chaudhary",
      collection: "medical",
      price: "00664 ETH",
      like: 243,
      image: images.user1,
      nftImage: images.nft_image_1,
      time: {
        days: 21,
        hours: 40,
        minutes: 81,
        seconds: 15,
      },
    },
    {
      title: "Buddy NFT",
      id: 2,
      name: "prince sharma",
      collection: "Gym",
      price: "0000004 ETH",
      like: 243,
      image: images.user2,
      nftImage: images.nft_image_2,
      time: {
        days: 77,
        hours: 11,
        minutes: 21,
        seconds: 45,
      },
    },
    {
      title: "Chapri NFT",
      id: 3,
      name: "Vinay sharma",
      collection: "chapri",
      price: "0000064 ETH",
      like: 243,
      image: images.user3,
      nftImage: images.nft_image_3,
      time: {
        days: 37,
        hours: 20,
        minutes: 11,
        seconds: 55,
      },
    },
    {
      title: "girls NFT",
      id: 4,
      name: "Rizwan sharma",
      collection: "girls",
      price: "4664 ETH",
      like: 243,
      image: images.user4,
      nftImage: images.nft_image_1,
      time: {
        days: 87,
        hours: 29,
        minutes: 10,
        seconds: 15,
      },
    },
  ];

  const inc = useCallback(() => {
    if (idNumber + 1 < sliderData.length) {
      setIdNumber(idNumber + 1);
    }
  }, [idNumber, sliderData.length]);

  const dec = useCallback(() => {
    if (idNumber > 0) {
      setIdNumber(idNumber - 1);
    }
  }, [idNumber]);

  return (
    <div className={Style.BigNftSlider}>
      <div className={Style.BigNftSlider_box}>
        <div className={Style.BigNftSlider_box_left}>
          <h2>{sliderData[idNumber].title}</h2>
          <div className={Style.BigNftSlider_box_left_creator}>
            <div className={Style.BigNftSlider_box_left_creator_profile}>
              <Image
                src={sliderData[idNumber].image}
                alt="profile image"
                height={50}
                width={50}
              />
              <div className={Style.BigNftSlider_box_left_creator_profile_info}>
                <p>Creator</p>
                <h4>
                  {sliderData[idNumber].name}
                  <span>
                    <MdVerified />
                  </span>
                </h4>
              </div>
            </div>
            <div className={Style.BigNftSlider_box_left_creator_collection}>
              <span>
                <AiFillFire
                  className={
                    Style.BigNftSlider_box_left_creator_collection_icon
                  }
                />
              </span>
              <div
                className={Style.BigNftSlider_box_left_creator_collection_info}
              >
                <p>Collection</p>
                <h4>{sliderData[idNumber].collection}</h4>
              </div>
            </div>
          </div>
          <div className={Style.BigNftSlider_box_left_bidding}>
            <div className={Style.BigNftSlider_box_left_bidding_box}>
              <small>Current Bid</small>
              <p>
                {sliderData[idNumber].price} <span>$221,21</span>
              </p>
            </div>

            <p className={Style.BigNftSlider_box_left_bidding_box_auction}>
              <MdTimer
                className={Style.BigNftSlider_box_left_bidding_box_icon}
              />
              <span>Auction ending in</span>
            </p>

            <div className={Style.BigNftSlider_box_left_bidding_box_timer}>
              <div
                className={Style.BigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.days}</p>
                <span>Days</span>
              </div>

              <div
                className={Style.BigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.hours}</p>
                <span>Hours</span>
              </div>

              <div
                className={Style.BigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.minutes}</p>
                <span>mins</span>
              </div>

              <div
                className={Style.BigNftSlider_box_left_bidding_box_timer_item}
              >
                <p>{sliderData[idNumber].time.seconds}</p>
                <span>secs</span>
              </div>
            </div>

            <div className={Style.BigNftSlider_box_left_button}>
              <Button btnName="Place" handleClick={() => {}} />
              <Button btnName="View" handleClick={() => {}} />
            </div>
          </div>
          <div className={Style.BigNftSlider_box_left_sliderBtn}>
            <TbArrowBigLeftLines
              className={Style.BigNftSlider_box_left_sliderBtn_icon}
              onClick={() => dec()}
            />
            <TbArrowBigRightLine
              className={Style.BigNftSlider_box_left_sliderBtn_icon}
              onClick={() => inc()}
            />
          </div>
        </div>
        <div className={Style.BigNftSlider_box_right}>
          <div className={Style.BigNftSlider_box_right_box}>
            <Image
              src={sliderData[idNumber].nftImage}
              alt="NFT IMAGE"
              className={Style.BigNftSlider_box_right_box_img}
            />

            <div className={Style.BigNftSlider_box_right_box_like}>
              <AiFillHeart />
              <span>{sliderData[idNumber].like}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BigNftSlider;
