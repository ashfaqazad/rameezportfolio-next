import React from "react";
import styles from "../StyleSheet/Card.module.css";

const Card = ({ title, description, buttonLabel, icon, onClick }) => {
  return (
    <div className={styles.card}>
      <div className={styles.icon}>{icon}</div>
      <h2 className={styles.cardTitle}>{title}</h2>
      <p className={styles.cardDescription}>{description}</p>
      <button className={styles.cardButton} onClick={onClick}>
        {buttonLabel}
      </button>
    </div>
  );
};

export default Card;
