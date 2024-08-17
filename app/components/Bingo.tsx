import React from "react";
import BingoCard from "./BingoCard";
import { bingoData } from "../data/bingoData";

const Bingo = () => {
  return (
    <section id="bingo" className="w-full h-full mt-36 flex justify-center">
      <div className="w-[95%] flex flex-col items-center justify-center">
        <h1 className="text-5xl max-w-[480px] text-center">
          Открой все карточки и собери свое бинго
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-10">
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
