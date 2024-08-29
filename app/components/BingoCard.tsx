import React, { useState } from "react";
import style from "../style/BingoFlip.module.css";

interface Props {
  image: string;
  title: string;
  description: string;
}

const BingoCard = ({ image, title, description }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      onClick={handleClick}
      className={`lg:w-[445px] lg:h-[240px] w-[343px] h-[200px] text-black border-box rounded-2xl cursor-pointer relative  transition-all duration-700 overflow-hidden`}
      style={{
        perspective: "1000px",
      }}
    >
      <div
        className={`${style.card} ${isFlipped ? style.flipped : ""}`}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
      >
        {/* Передняя сторона */}
        <div
          className={`absolute w-full h-full flex items-center justify-center bg-cover bg-center rounded-2xl`}
          style={{
            backfaceVisibility: "hidden",
            backgroundImage: `url(${image})`,
          }}
        >
          <h1 className="text-[22px] lg:text-3xl font-medium text-center">
            {title}
          </h1>
        </div>

        {/* Задняя сторона */}
        <div
          className="absolute w-full h-full bg-white flex items-center justify-center rounded-2xl"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-xl text-start overflow-y-auto h-[160px] lg:px-6 p-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BingoCard;
