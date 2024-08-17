import React from "react";
import hero from "../../public/hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="w-[100%] mx-9">
      <div className="w-[95%] h-[100%] flex items-center justify-between">
        <div className="w-[45%]">
          <h1 className="text-6xl mb-8 font-medium">
            Плотинка лесная отборная со вкусом подземного ручейка
          </h1>
          <p className="text-xl mb-8 font-normal">
            Заводская плотина в Екатеринбурге была построена в 1723 году
            из уральской лиственницы, которая не гниет в воде, а со временем
            лишь каменеет и становится крепче. В создании плотинки принял
            деятельное участие российский военный инженер В. И. де Геннин.
          </p>
          <p className="text-xl font-normal">
            С этого места началось всё строительство города. Одновременно стали
            возводить крепость, защищающую будущий завод от набегов башкир,
            на чьих землях он и строился.
          </p>
        </div>
        <Image src={hero} alt="" />
      </div>
    </div>
  );
};

export default Hero;
