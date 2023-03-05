import React from "react";
import Image from "next/image";

//-----internal import
import Style from "./Notification.module.css";
import images from "../../../img";

function Notification() {
  return (
    <div className={Style.notification}>
      <p>Notification</p>
      <div className={Style.notification_box}>
        <Image
          src={images.user1}
          alt="profile img"
          height={50}
          width={50}
          className={Style.notification_box_img}
        />
        <div className={Style.notification_box_info}>
          <h4>Prince sharma</h4>
          <p>measur eacrion iser</p>
          <small>3 minutes ago</small>
        </div>
        <span className={Style.notification_box_new}></span>
      </div>
    </div>
  );
}

export default Notification;
