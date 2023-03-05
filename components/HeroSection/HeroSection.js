import React from "react";
import Image from "next/image";
// --internal imoprt
import Style from "./HeroSection.module.css";
import { Button } from "../componentIndex";
import images from "../../img";

function HeroSection() {
  //   const { titleData } = useContext(NFTMarketplaceContext);
  //   const router = useRouter();
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Grow and sell Your Nfts 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button
            btnName="Start your search"
            //   handleClick={() => router.push("/searchPage")}
          />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
