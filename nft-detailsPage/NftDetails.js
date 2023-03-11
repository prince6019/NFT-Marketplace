import React from "react";
// ---internal import
import Style from "./NftDetails.module.css";
import { NftDescription, NftDetailsImg } from "./NftdetailsIndex";

function NftDetails() {
  return (
    <div className={Style.NFTDetailsPage}>
      <div className={Style.NFTDetailsPage_box}>
        <NftDetailsImg />
        <NftDescription />
      </div>
    </div>
  );
}

export default NftDetails;
