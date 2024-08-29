import React, { useState } from "react";
import faqs from "../../public/faqs_arrow.svg";
import Image from "next/image";

interface Props {
  title: string;
  desc: string;
}

const FaqsItems = ({ title, desc }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full relative">
      <div className="w-full grid divide-y divide-neutral-200">
        <div className="py-5">
          <button
            onClick={toggleOpen}
            className="flex justify-between items-center font-medium cursor-pointer w-full text-left"
          >
            <span className="text-xl lg:text-2xl">{title}</span>
            <span
              className={`transition transform ${
                isOpen ? "rotate-0" : "rotate-180"
              } duration-300`}
            >
              <Image src={faqs} alt="" />
            </span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-white mt-[14px] lg:mt-[26px] text-lg lg:text-xl">
              {desc}
            </p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div
          className="h-px bg-[#A6ABB3] mx-auto"
          style={{ marginTop: "20px" }}
        ></div>
      </div>
    </div>
  );
};

export default FaqsItems;
