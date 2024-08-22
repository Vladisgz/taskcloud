import React from "react";
import InfoOrder from "./InfoOrder";
import InfoCard from "./InfoCard";
import { infoCardsData, infoOrderData } from "../data/infoData";

const Info = () => {
  return (
    <section
      id="info"
      className="w-full h-full mt-36 sm:mt-[70px] md:mt-[100px] flex justify-center"
    >
      <div className="w-[95%] flex flex-col items-center justify-center">
        <h1 className="max-w-[658px] mb-5 text-[28px] lg:text-[42px] text-center">
          В первый день вас ждет интересный маршрут
        </h1>
        <p className="max-w-[1068px] text-[22px] lg:text-3xl text-center">
          Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург,
          так прилежащие к нему районы Свердловской области.
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 items-center justify-center mt-5 lg:mt-10">
          {infoOrderData.map((x, i) => (
            <InfoOrder key={i} image={x.image} text={x.text} />
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10 items-center justify-center">
          {infoCardsData.map((x, i) => (
            <InfoCard key={i} title={x.title} description={x.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
