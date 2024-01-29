import React from "react";
import styles from "../HomePage/HomePage.module.css";
import homeImage from "../../assets/images/cover.png";


const HomePage = () => {
  return (


    <div className={styles.box}>
      <div className={styles.image}>
        <img src={homeImage} alt="coverPage Image" />
        <h1 className={styles.title}>Pocket Notes</h1>
        <p className={styles.info}>
          Send and receive messages without keeping your phone online. <br />
          Use Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className={styles.bottom}>🔒end-to-end encrypted</div>
    </div>

  );
};

export default HomePage;