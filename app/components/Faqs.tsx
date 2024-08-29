import React from "react";
import FaqsItems from "./FaqsItems";
import { faqsData } from "../data/faqsData";

const Faqs = () => {
  return (
    <section
      id="faqs"
      className="w-full h-full sm:mt-[70px] md:mt-[100px] lg:mt-36 flex justify-center"
    >
      <div className="w-[95%] flex flex-col items-center justify-center">
        <h2 className="text-[28px] lg:text-[42px] text-start">Еще вопросы?</h2>
        {faqsData.map((x, i) => (
          <FaqsItems key={i} title={x.title} desc={x.desc} />
        ))}
      </div>
    </section>
  );
};

export default Faqs;
