import React from "react";
import InfoOrder from "./InfoOrder";
import logo1 from "../../public/illustr_2.svg";
import logo2 from "../../public/illustr_3.svg";
import logo3 from "../../public/illustr_4.svg";
import InfoCard from "./InfoCard";
import { infoCardsData } from "../data/infoData";

const Info = () => {
  return (
    <section id="info" className="w-full h-full mt-36 flex justify-center">
      <div className="w-[95%] flex flex-col items-center justify-center">
        <h1 className="max-w-[658px] mb-5 text-[42px] text-center">
          В первый день вас ждет интересный маршрут
        </h1>
        <p className="max-w-[1068px] text-3xl text-center">
          Международный аэропорт Екатеринбурга обслуживает как сам Екатеринбург,
          так прилежащие к нему районы Свердловской области.
        </p>
        <div className="flex items-center justify-between w-full mt-8">
          <InfoOrder image={logo1} text="Как получить заказ?" />
          <InfoOrder image={logo2} text="Как оплатить заказ?" />
          <InfoOrder image={logo3} text="Как обменять заказ?" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full mt-8">
          {infoCardsData.map((x, i) => (
            <InfoCard key={i} title={x.title} description={x.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
