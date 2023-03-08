import React, { useState } from "react";
import {
  RiUserFollowFill,
  RiUserUnfollowFill,
  RiAwardLine,
} from "react-icons/ri";
// -----internal import
import Style from "./FollowerTab.module.css";
import images from "../../img";
import FollowerTabCard from "./FollowerTabCard/FollowerTabCard";
import { Button } from "../componentIndex";

function FollowerTab() {
  const CardArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const FollowingArray = [1, 2, 3, 4, 5, 6];

  const NewsArray = [1, 2, 3, 4, 5, 6, 7, 8];

  const [popular, setPopular] = useState(true);
  const [following, setFollowing] = useState(false);
  const [news, setNews] = useState(false);

  const openPopular = () => {
    if (!popular) {
      setPopular(true);
      setFollowing(false);
      setNews(false);
    }
  };
  const openFollower = () => {
    if (!following) {
      setPopular(false);
      setFollowing(true);
      setNews(false);
    }
  };
  const openNews = () => {
    if (!news) {
      setPopular(false);
      setFollowing(false);
      setNews(true);
    }
  };

  return (
    <div className={Style.followerTab}>
      <div className={Style.followerTab_title}>
        <h2> Top Creators List..</h2>
        <div className={Style.followerTab_tabs}>
          <div className={Style.followerTab_tabs_btn}>
            <Button
              btnName="Popular"
              handleClick={openPopular}
              icon={RiUserFollowFill}
            />
            <Button
              btnName="Following"
              handleClick={openFollower}
              icon={RiUserFollowFill}
            />
            <Button
              btnName="NoteWorthy"
              handleClick={openNews}
              icon={RiAwardLine}
            />
          </div>
        </div>
      </div>

      {popular && (
        <div className={Style.followerTab_box}>
          {CardArray.map((ele, i) => (
            <FollowerTabCard key={i + 1} i={i} ele={ele} />
          ))}
        </div>
      )}

      {following && (
        <div className={Style.followerTab_box}>
          {FollowingArray.map((ele, i) => (
            <FollowerTabCard key={i + 1} i={i} ele={ele} />
          ))}
        </div>
      )}

      {news && (
        <div className={Style.followerTab_box}>
          {NewsArray.map((ele, i) => (
            <FollowerTabCard key={i + 1} i={i} ele={ele} />
          ))}
        </div>
      )}

      <div className={Style.followerTab_member}>
        <div className={Style.followerTab_member_box}>
          <a href="#">Show me more</a>
          <a href="#">Become, author</a>
        </div>
      </div>
    </div>
  );
}

export default FollowerTab;
