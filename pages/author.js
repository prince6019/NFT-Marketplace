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

export default function author() {
  const [collectiables, setCollectiables] = useState(true);
  const [created, setCreated] = useState(false);
  const [like, setLike] = useState(false);
  const [follower, setFollower] = useState(false);
  const [following, setFollowing] = useState(false);

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
      <Brand />
    </div>
  );
}
