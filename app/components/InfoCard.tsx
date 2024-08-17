import React from "react";

interface Props {
  title: string;
  description: string;
}

const InfoCard = ({ title, description }: Props) => {
  return (
    <div className="w-[445px] h-[164px] border-2 bg-white text-black border-box rounded-lg flex flex-col items-start justify-center p-4">
      <h1 className="text-2xl font-medium">{title}</h1>
      <p className="text-xl max-w-[380px]">{description}</p>
    </div>
  );
};

export default InfoCard;
