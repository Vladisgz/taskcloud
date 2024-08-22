import React from "react";

interface Props {
  title: string;
  desc: string;
}

const FaqsItems = ({ title, desc }: Props) => {
  return (
    <div className="w-full relative">
      <div className="w-full grid divide-y divide-neutral-200">
        <div className="py-5">
          <details className="group">
            <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
              <span className="text-xl lg:text-2xl">{title}</span>
              <span className="transition group-open:rotate-180">
                <svg
                  color="#C2F23C"
                  fill="none"
                  height="24"
                  shape-rendering="geometricPrecision"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </summary>
            <p className="text-white mt-3 group-open:animate-fadeIn text-lg lg:text-xl">
              {desc}
            </p>
          </details>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="h-px bg-[#A6ABB3] mx-auto" style={{ marginTop: "20px" }}></div>
      </div>
    </div>
  );
};

export default FaqsItems;
