import React from "react";
import styles from "./page.module.css"; // Import the CSS module

export default function Page() {
  return (
    <div className={styles.out}>
      <ul className={styles.timeline}>
        <li>
          <div className={styles["direction-r"]}>
            <div className={styles["flag-wrapper"]}>
              <span className={styles.flag}>
                San Francisco State University
              </span>
              <span className={styles["time-wrapper"]}>
                <span className={styles.time}>August 2024 - present</span>
              </span>
            </div>
            <div className={styles.desc}>
              My current employment. Way better than the position before!
            </div>
          </div>
        </li>

        <li>
          <div className={styles["direction-l"]}>
            <div className={styles["flag-wrapper"]}>
              <span className={styles.flag}>Wicresoft.</span>
              <span className={styles["time-wrapper"]}>
                <span className={styles.time}>Apr 2024 - Jun 2024</span>
              </span>
            </div>
            <div className={styles.desc}>
              My first employer. All the stuff I've learned and projects I've
              been working on.
            </div>
          </div>
        </li>

        <li>
          <div className={styles["direction-r"]}>
            <div className={styles["flag-wrapper"]}>
              <span className={styles.flag}>Shanghai University</span>
              <span className={styles["time-wrapper"]}>
                <span className={styles.time}>2020 - 2024</span>
              </span>
            </div>
            <div className={styles.desc}>
              A description of all the lectures and courses I have taken and my
              final degree?
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
