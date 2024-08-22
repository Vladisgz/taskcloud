import Image from "next/image";
import React from "react";
import waitingFor from "../../public/photo.png";

const WaitingFor = () => {
  return (
    <section id="whatwaiting" className="w-[100%] h-full flex flex-col items-center justify-center">
      <div className="w-[95%] flex flex-col items-center justify-center mt-16">
        <h1 className="text-center text-4xl mb-10">
          Что ждёт за платинкой
        </h1>
        <Image src={waitingFor} alt="" />
        <p className="text-center mt-9 text-3xl">
          Межгалактические порты и бесконечные просторы вселенной
        </p>
      </div>
    </section>
  );
};

export default WaitingFor;
