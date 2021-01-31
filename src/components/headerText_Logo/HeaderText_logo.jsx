import React from "react";
import Logo from "../../assets/images/TextLogo.png";
import styles from "./HeaderText_logo.module.css";
function HeaderText_logo() {
  return (
    <div className={styles.imgsWrapper}>
      {/* <div>
        Herzlich willkommen zum Tag der offenen Tur{" "}
        <img src={Logo} alt="Elisabethsculle Malburg Logo" />
      </div>
      <div>Vielfaltig lernen - Starken entwickeln - Aufeinander achten</div> */}
      <img src={Logo} className={styles.imgstyles} />
    </div>
  );
}

export default HeaderText_logo;
