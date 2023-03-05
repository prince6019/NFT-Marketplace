import Link from "next/link";
import React from "react";
//------ internal import
import Style from "./HelpCenter.module.css";

function HelpCenter() {
  const helpCenter = [
    {
      name: "About",
      link: "aboutus",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "LogIn",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];

  return (
    <div>
      {helpCenter.map((ele, i) => (
        <div className={Style.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${ele.link}` }}> {ele.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default HelpCenter;
