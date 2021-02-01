import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player/youtube";
import { useHistory } from "react-router-dom";
import BackForwardNavigation from "../../components/backForwardNavigation";
import Logo from "../../assets/images/logo-elizabethschulle.png";
import MainPic from "../../assets/images/director.jpg";
import PlayIcon from "../../assets/images/icon_play.svg";
// import Logo from "../../assets/images/briefkopf3.jpg";
import Closeicon from "../../assets/images/close.png";
import HeaderText_logo from "../../components/headerText_Logo";
import styles from "./main.module.css";

const Main = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const [width, setWidth] = useState("40vw");
  const [height, setHeight] = useState("30vw");
  const history = useHistory();

  const closeVideo = () => {
    history.push("/media");
  };

  const playVideoButton = () => {
    setWidth("100%");
    setHeight("100%");
  };

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
      <HeaderText_logo />
      <div className={styles.container}>
        {/* <img
          src={Logo}
          alt="Elisabethsculle Malburg Logo"
          className={styles.logo}
        /> */}
        <div className={styles.aligner}>
          {!playVideo ? (
            <div className={styles.imgWrapper}>
              <img src={MainPic} alt="director" className={styles.mainImg} />
              <img
                src={PlayIcon}
                alt="play"
                className={styles.play}
                onClick={() => setPlayVideo(true)}
              />
            </div>
          ) : (
            <>
              <img
                src={Closeicon}
                alt="close icon"
                className={styles.close}
                onClick={closeVideo}
              />
            </>
          )}
          <div className={styles.videoWrapper}>
            <ReactPlayer
              className={styles.video}
              title="Elisabethsculle Malburg Intro"
              width={width / 1.5}
              height={`${(width / 1.5) * 0.5625}px`}
              url="https://www.youtube.com/embed/MXmeGmQfU00"
              fileConfig={{
                attributes: {
                  autoPlay: "true",
                  playing: "true",
                },
              }}
              controls
              playinline
              playsinline
              playing
              autoplay
              light={MainPic}
              onStart={playVideoButton}
            />
            <div className={styles.forwardIcon}>
              <BackForwardNavigation forwardPath="/media" />
            </div>
          </div>
        </div>
        {/* <div className={styles.forwardIcon}>
          <BackForwardNavigation forwardPath="/media" />
        </div> */}
      </div>
    </>
  );
};

export default Main;
