import Image from "next/image";
import React from "react";
import waitingFor from "../../public/photo.png";

const WaitingFor = () => {
  return (
    <section id="whatwaiting" className="w-[100%] h-[100%]">
      <div  className="grid items-center justify-center mt-16">
        <h1 className="flex items-center justify-center text-4xl mb-10">
          Что ждёт за платинкой
        </h1>
        <Image src={waitingFor} alt="" />
        <p className="flex items-center justify-center mt-9 text-3xl">Межгалактические порты и бесконечные просторы вселенной</p>
      </div>
    </section>
  );
};

export default WaitingFor;
