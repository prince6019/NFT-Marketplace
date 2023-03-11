import { useEffect, useState, useContext } from "react";

import Style from "../styles/search.module.css";
import { Slider, Brand, Loader, Filter } from "../components/componentIndex";
import { SearchBar } from "../searchPage/componentIndex";

import { NFTCardTwo, Banner } from "../collectionPage/collectionIndex";
import images from "../img";
export default function search() {
  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <Slider />
      <Brand />
    </div>
  );
}
