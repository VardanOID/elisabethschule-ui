import React from "react";
import Button from "../../assets/images/Button_2.png";
import logoForMainPage from "../../assets/images/logoForMainPage.png";
import styles from "./ButtonMainPage.module.css";
import { NavLink } from "react-router-dom";
function buttonMainPage() {
  return (
    <div>
      <NavLink to="/media">
        <img src={Button} alt="forward" className={styles.icon} />
      </NavLink>

      {/* <img src={Button} alt="forward" className={styles.icon} />  */}
      <img src={logoForMainPage} alt="forward" className={styles.iconFooter} />
    </div>
  );
}

export default buttonMainPage;
