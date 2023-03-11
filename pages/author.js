import React, { useState, useEffect } from "react";

// ---internal import
import Style from "../styles/author.module.css";
import { Banner } from "../collectionPage/collectionIndex";
import { Brand, Title } from "../components/componentIndex";
import images from "../img";
import {
  AuthorProfileCard,
  AuthorTaps,
  AuthorNftCardBox,
} from "../authorPage/componentIndex";
import FollowerTabCard from "@/components/FollowerTab./FollowerTabCard/FollowerTabCard";

export default function author() {
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

  const followerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
      seller: "7d64gf748849j47fy488444",
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
      seller: "7d64gf748849j47fy488444",
    },
  ];
  return (
    <div>
      <Banner bannerImage={images.creatorbackground2} />
      <AuthorProfileCard currentAccount="1023456789" />
      <AuthorTaps
        setCollectiables={setCollectiables}
        setCreated={setCreated}
        setLike={setLike}
        setFollower={setFollower}
        setFollowing={setFollowing}
      />
      <AuthorNftCardBox
        collectiables={collectiables}
        created={created}
        like={like}
        follower={follower}
        following={following}
      />
      <Title
        heading="Popular Creators"
        paragraph="Click on music icon and enjoy NTF music or audio"
      />
      <div className={Style.author_box}>
        {followerArray.map((ele, i) => (
          <FollowerTabCard i={i} ele={ele} />
        ))}
      </div>
      <Brand />
    </div>
  );
}
