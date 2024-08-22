import Image from "next/image";
import React from "react";

interface Props {
  image: string;
  text: string;
}

const InfoOrder = ({ image, text }: Props) => {
  return (
    <div className="items-center justify-center flex flex-col max-w-[409px] border-2 border-transparent cursor-pointer hover:border-[#C2F23C] rounded-lg transition-all p-12 box-border">
      <Image src={image} alt="" />
      <p className="text-[22px] lg:text-3xl mt-14 text-center">{text}</p>
    </div>
  );
};

export default InfoOrder;
