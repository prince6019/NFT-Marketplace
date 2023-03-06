import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//---internal import
import Style from "./Collection.module.css";
import DaysComponent from "./DaysComponent/DaysComponent";
import images from "../../img";
import { Button } from "../componentIndex";

function Collection() {
  const [latest, setlatest] = useState(true);
  const [following, setFollowing] = useState(false);
  const [total, setTotal] = useState(false);

  const latestArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];
  const totalArray = [
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
  ];

  //   const openlatest = () => {
  //     if (!latest) {
  //       setlatest(true);
  //       setFollowing(false);
  //       setTotal(false);
  //     }
  //   };

  //   const openFollower = () => {
  //     if (!following) {
  //       setlatest(false);
  //       setFollowing(true);
  //       setTotal(false);
  //     }
  //   };

  //   const opentotal = () => {
  //     if (!total) {
  //       setlatest(false);
  //       setFollowing(false);
  //       setTotal(true);
  //     }
  //   };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creators</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <Button
              btnName="24 hours"
              icon={<BsFillAlarmFill />}
              //   onClick={() => openlatest()}
              //   handleClick={openlatest()}
            />
            <Button
              btnName="7 days"
              icon={<BsCalendar3 />}
              //   onClick={() => openFollower()}
              //   handleClick={openFollower()}
            />

            <Button
              btnName="30 Days"
              icon={<BsFillCalendarDateFill />}
              //   onClick={() => opentotal()}
              //   handleClick={opentotal()}
            />
            {/* <BsFillCalendarDateFill /> */}
          </div>
        </div>
      </div>
      {latest && (
        <div className={Style.collection_box}>
          {latestArray.map((ele, i) => (
            <DaysComponent key={i + 1} i={i} ele={ele} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.collection_box}>
          {followingArray.map((ele, i) => (
            <DaysComponent key={i + 1} i={i} ele={ele} />
          ))}
        </div>
      )}

      {total && (
        <div className={Style.collection_box}>
          {totalArray.map((ele, i) => (
            <DaysComponent key={i + 1} i={i} ele={ele} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Collection;
