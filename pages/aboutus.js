import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import { Brand } from "@/components/componentIndex";
import images from "../img";

export default function aboutus() {
  const founderArray = [
    {
      name: "Niamh O'Shea",
      position: "Co-founder and Chief Executive",
      images: images.founder1,
    },
    {
      name: "Danien Jame",
      position: "Co-founder and Chief Executive",
      images: images.founder2,
    },
    {
      name: "Orla Dwyer",
      position: "Co-founder, Chairman",
      images: images.founder3,
    },
    {
      name: "Dara Frazier",
      position: "Co-Founder, Chief Strategy Officer",
      images: images.founder4,
    },
  ];

  const factsArray = [
    {
      title: "10 million",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.hero2} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((ele, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={ele.images}
                  alt={ele.name}
                  width={300}
                  height={300}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{ele.name}</h3>
                <p>{ele.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((ele, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{ele.title}</h3>
                <p>{ele.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Brand />
    </div>
  );
}
