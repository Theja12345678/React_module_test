import React from "react";
import styles from "../Time/Time.module.css";

const Time = ({ text, time, date }) => {
  return (
    <div className={styles.mainChat}>
      <div className={styles.box}>
        <p className={styles.text}>{text}</p>
        <h4>{date + " " + "•" + " " + time}</h4>
      </div>
    </div>
  );
};

export default Time;