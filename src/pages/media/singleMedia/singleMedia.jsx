import React, { useState, useEffect } from "react";
import { useHistory, NavLink } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import BackForwardNavigation from "../../../components/backForwardNavigation";
import FooterIcons from "../../../components/footerIcons";
import CloseIcon from "../../../assets/images/close.png";
import BurgerIcon from "../../../assets/images/icon_burger.png";
import { ASSETS } from "../../../constants/index.jsx";
import { ASSETS1 } from "../../../constants/test.jsx";
import styles from "./singleMedia.module.css";
import LogoHeader from "../../../components/headerText_Logo";
const SingleMedia = ({ link }) => {
  const [width, setWidth] = useState("40vw");
  const [height, setHeight] = useState("30vw");

  const history = useHistory();
  const currentMedia = ASSETS.find((asset) => asset.path === link);
  const [menuVisibility, setMenuVisibility] = useState("hidden");

  useEffect(() => {
    if (!link || !currentMedia) {
      history.push("/media");
    }
  }, [currentMedia, history, link]);

  const handleResize = () => {
    const { innerWidth: width, innerHeight: height } = window;
    setWidth(width);
    setHeight(height);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      <LogoHeader />
      <div className={styles.container}>
        <img
          src={BurgerIcon}
          alt="burgerMenu"
          className={styles.burgerMenu}
          onClick={() => setMenuVisibility("visible")}
        />
        <div
          className={`${styles.items} ${styles[menuVisibility]}`}
          onClick={() => setMenuVisibility("hidden")}
        >
          <img
            src={CloseIcon}
            alt="close"
            className={styles.close}
            onClick={() => setMenuVisibility("hidden")}
          />
          {ASSETS.map((asset) => {
            const mystyle = {
              display: "block",

              color: "#fff",
              fontWeight: "600",
              whiteSpace: "nowrap",
              padding: "4px 38px 12px",
              margin: "0px -1px -1px",
              width: "165px",
              backgroundImage: `url(${asset.i})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              border: "6px solid transparent",
              borderRadius: "10px",
              opacity: "0.9",
              cursor: "pointer",
              textDecoration: "none",
            };

            return (
              <NavLink
                to={`/media/${asset.path}`}
                activeClassName={styles.active}
                key={asset.path}
                className={styles.item}
                style={mystyle}
                // onClick={() => {
                //   setMyColor("black");
                // }}
              >
                {asset.name}
              </NavLink>
            );
          })}
        </div>
        <div className={styles.mediaWrapper}>
          <ReactPlayer
            className={styles.video}
            title={currentMedia.name}
            width={width / 1.5}
            height={`${(width / 1.5) * 0.5625}px`}
            url={`${currentMedia.videoLink}?start=0`}
            fileConfig={{
              attributes: {
                autoPlay: "true",
                playing: "true",
              },
            }}
            controls={true}
            playsinline
            playsinline
            playing={true}
            autoplay={true}
          />
          <BackForwardNavigation backPath="/media" />
        </div>
      </div>
      <div className={styles.footerIcons}>
        <FooterIcons />
      </div>
    </>
  );
};

export default SingleMedia;
