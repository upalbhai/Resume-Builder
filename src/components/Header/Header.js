import React from "react";

import resumeSvg from "../../assets/resume.svg";
import Body from "..//Body/Body";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.heading}>
            Welcome to <span> Rocking Resumes</span>
          </p>
          <p className={styles.heading}>
            Make your own resume. <span>It's free</span>
          </p>
        </div>
        <div className={styles.right}>
          <img src={resumeSvg} alt="Resume" />
        </div>
      </div>
      <Body />
    </div>
  );
}

export default Header;
