import React from "react";
import Logo from "../../assets/images/TextLogo1.png";
import styles from "./HeaderText_logo.module.css";
function HeaderText_logo() {
  return (
    <div className={styles.imgsWrapper}>
      <img src={Logo} className={styles.imgstyles} />
    </div>
  );
}

export default HeaderText_logo;
