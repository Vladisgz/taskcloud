import React, { useState } from "react";
import style from "../style/Bingo.module.css";

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
      className={`lg:w-[445px] lg:h-[240px] w-[343px] h-[200px] text-black border-box rounded-2xl cursor-pointer flex flex-col items-center justify-center bg-cover bg-center transition-all duration-700 ${
        isFlipped ? `${style.rotateY}` : ""
      }`}
      style={{
        backgroundImage: isFlipped ? "none" : `url(${image})`,
        backgroundColor: isFlipped ? "white" : "transparent",
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
    >
      {isFlipped ? (
        <p
          style={{ transform: "rotateY(180deg)" }}
          className="text-xl text-start overflow-y-auto h-[160px] p-2"
        >
          {description}
        </p>
      ) : (
        <h1 className="text-2xl font-medium text-center">{title}</h1>
      )}
    </div>
  );
};

export default BingoCard;
