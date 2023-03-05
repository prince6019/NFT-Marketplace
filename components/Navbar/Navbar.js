import Style from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//---- IMPORT ICON
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

//---- INTERNAL IMPORT
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../componentIndex";
import images from "../../img";

export default function Navbar() {
  // -- UseState components
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      if (!discover) {
        setDiscover(true);
        setHelp(false);
        setNotification(false);
        setProfile(false);
      } else {
        setDiscover(false);
      }
    }

    if (btnText === "HelpCenter") {
      if (!help) {
        setDiscover(false);
        setHelp(true);
        setNotification(false);
        setProfile(false);
      } else {
        setHelp(false);
      }
    }
  };

  const openNotificaiton = () => {
    if (!notification) {
      setDiscover(false);
      setHelp(false);
      setNotification(true);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    } else {
      setProfile(false);
    }
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT MARKETPALCE"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_input}>
            <input type="text" placeholder="Search NFTs" />
          </div>
        </div>

        {/*End of the left Section */}

        <div className={Style.navbar_container_right}>
          {/* Discover menu */}
          <div className={Style.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          {/* help Center Menu */}
          <div className={Style.navbar_container_right_helpcenter}>
            <p onClick={(e) => openMenu(e)}>HelpCenter</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* Notifcation Menu */}
          <div className={Style.navbar_container_right_notification}>
            <p>
              <MdNotifications onClick={() => openNotificaiton()} />
            </p>
            {notification && (
              <div className={Style.navbar_container_right_notification_box}>
                <Notification />
              </div>
            )}
          </div>
          {/* Profile  */}
          <div className={Style.navbar_container_right_profile}>
            <Image
              src={images.user1}
              alt="Profile"
              width={40}
              height={40}
              onClick={() => openProfile()}
              className={Style.navbar_container_right_profileImg}
            />
            {profile && (
              <div className={Style.navbar_container_right_profile_box}>
                <Profile />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
