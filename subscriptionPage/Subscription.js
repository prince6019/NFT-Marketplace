import React from "react";
import { TiTick } from "react-icons/ti";

// --intrenal import
import Style from "./Subscription.module.css";
import { Button } from "@/components/componentIndex";

function Subscription({ ele, i }) {
  return (
    <div className={Style.SubscriptionBox}>
      <div className={Style.SubscriptionBox_box}>
        <span className={Style.SubscriptionBox_box_span}>{ele.plan}</span>
        <small className={Style.SubscriptionBox_box_small}>
          {ele.popular || ""}
        </small>
        <p className={Style.SubscriptionBox_box_price}>{ele.price}</p>

        <div className={Style.SubscriptionBox_box_info}>
          {ele.service.map((ele, i) => (
            <p className={Style.SubscriptionBox_box_info_para} key={i + 1}>
              <span>
                <TiTick />
              </span>
              {ele}
            </p>
          ))}
        </div>
        <Button
          btnName="Submit"
          handleClick={() => {}}
          classStyle={Style.button}
        />
      </div>
    </div>
  );
}

export default Subscription;
