import React from "react";
import { useHistory, useParams } from "react-router-dom";
import styles from "./media.module.css";
import BackForwardNavigation from "../../components/backForwardNavigation";
import FooterIcons from "../../components/footerIcons";
import { ASSETS } from "../../constants/index.jsx";
import SingleMedia from "./singleMedia";
import LogoHeader from "../../components/headerText_Logo";
import I1 from "../../assets/images/videoCovers/pull-out.jpg";
import { Link } from "react-router-dom";
const Media = () => {
  const history = useHistory();
  const params = useParams();

  if (params.link) {
    return <SingleMedia link={params.link} />;
  }

  return (
    <div className={styles.container}>
      <LogoHeader />
      <div className={styles.mediaWrapper}>
        {ASSETS.map((asset) => {
          const videoPlay = () => {
            history.push(`/media/${asset.path}`);
          };

          return (
            <div className={styles.singleMedia} key={asset.id}>
              <div className={styles.imgWrapper}>
                <img
                  src={asset.img}
                  alt={asset.name}
                  className={styles.img}
                  onClick={videoPlay}
                />
              </div>
              {/* <span className={styles.title}>{asset.name}</span> */}
            </div>
          );
        })}

        <div className={styles.linkToWrapper}>
          <a href={process.env.PUBLIC_URL + "/panorama/index.html"}>
            <div className={styles.linkTo}></div>
          </a>
        </div>
      </div>
      <div className={styles.navIcons}>
        <BackForwardNavigation
          backPath="/"
          forwardPath={`/media/${ASSETS[0].path}`}
        />
      </div>
      <div className={styles.footerIcons}>
        <FooterIcons />
      </div>
    </div>
  );
};

export default Media;
