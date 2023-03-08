import React from "react";
import AudioCard from "./AudioCard/AudioCard";
import AudioCardSmall from "./AudioCardSmall/AudioCardSmall";
// ---internal import
import Style from "./AudioLive.module.css";

function AudioLive() {
  return (
    <div className={Style.audioLive}>
      <div className={Style.audioLive_box}>
        <div className={Style.audioLive_box_left}>
          <AudioCard />
          <AudioCard />
        </div>
        <div className={Style.audioLive_box_right}>
          <AudioCardSmall />
          <AudioCardSmall />
          <AudioCardSmall />
        </div>
      </div>
    </div>
  );
}

export default AudioLive;
