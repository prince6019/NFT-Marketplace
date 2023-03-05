import Link from "next/link";
import React from "react";

//----- internal imort
import Style from "./Discover.module.css";

function Discover() {
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "searchPage",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];

  return (
    <div>
      {discover.map((ele, i) => (
        <div key={i + 1} className={Style.discover}>
          <Link href={{ pathname: `${ele.link}` }}>{ele.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Discover;
