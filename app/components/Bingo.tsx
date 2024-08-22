import React from "react";
import BingoCard from "./BingoCard";
import { bingoData } from "../data/bingoData";
import styles from "../style/Bingo.module.css";

const Bingo = () => {
  return (
    <section id="bingo" className={styles.sectionContainer}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Открой все карточки и собери свое бинго
        </h1>
        <div className={styles.gridContainer}>
          {bingoData.map((x, i) => (
            <BingoCard
              key={i}
              image={x.image.src}
              title={x.title}
              description={x.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bingo;
