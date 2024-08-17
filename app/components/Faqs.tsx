import React from "react";
import FaqsItems from "./FaqsItems";

const Faqs = () => {
  return (
    <section id="faqs" className="w-full h-full mt-36 flex justify-center">
      <div className="w-[95%] flex flex-col items-center justify-center">
        <h1 className="text-[42px] text-center">Еще вопросы?</h1>
        <FaqsItems
          title="Что такое современный поиск?"
          desc="Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности"
        />
        <FaqsItems
          title="Что такое современный поиск?"
          desc="Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности"
        />
        <FaqsItems
          title="Что такое современный поиск?"
          desc="Процесс поиска неструктурированной документальной информации, удовлетворяющей информационные потребности"
        />
      </div>
    </section>
  );
};

export default Faqs;
