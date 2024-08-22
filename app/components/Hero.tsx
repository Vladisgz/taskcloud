import React from "react";
import hero from "../../public/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100%] mx-9">
      <div className="flex md:flex-row sm:flex-col-reverse sm:items-start items-center justify-between">
        <div className="md:w-[45%] sm:w-[100%]">
          <h1 className="md:text-6xl sm:text-[32px] mb-8 font-medium">
            Плотинка лесная отборная со вкусом подземного ручейка
          </h1>
          <p className="lg:text-xl text-[18px] mb-8 font-normal">
            Заводская плотина в Екатеринбурге была построена в 1723 году из
            уральской лиственницы, которая не гниет в воде, а со временем лишь
            каменеет и становится крепче. В создании плотинки принял деятельное
            участие российский военный инженер В. И. де Геннин.
          </p>
          <p className="lg:text-xl text-[18px] font-normal">
            С этого места началось всё строительство города. Одновременно стали
            возводить крепость, защищающую будущий завод от набегов башкир, на
            чьих землях он и строился.
          </p>
        </div>
        <div className="lg:w-[45%] sm:w-[100%] mb-8 flex justify-center">
          <Image src={hero} alt="Героическое изображение" className="h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
