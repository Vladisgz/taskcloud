import Image from "next/image";
import React from "react";
import waitingFor from "../../public/photo.png";
import styles from "../style/Waiting.module.css";

const WaitingFor = () => {
  return (
    <section id="whatwaiting" className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Что ждёт меня на пути?</h1>
        <Image src={waitingFor} alt="" />
        <p className={styles.description}>
          Межгалактические порты и бесконечные просторы вселенной
        </p>
      </div>
    </section>
  );
};

export default WaitingFor;
