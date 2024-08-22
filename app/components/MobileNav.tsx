import React, { useEffect, useRef } from "react";
import NavItems from "./NavItems";
import { XMarkIcon } from "@heroicons/react/20/solid";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navRef = useRef<HTMLDivElement>(null);

  const handleSmoothScroll = (event: React.MouseEvent, linkTo: string) => {
    event.preventDefault();
    document.querySelector(linkTo)?.scrollIntoView({ behavior: "smooth" });
    closeNav();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        closeNav();
      }
    };

    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [nav, closeNav]);

  return (
    <>
      {nav && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={closeNav}
        />
      )}
      <div
        ref={navRef}
        className={`fixed right-0 top-0 w-[80vw] h-[100vh] transform transition-transform duration-300 z-[10000] bg-[#282828] ${
          nav ? "translate-x-0" : "translate-x-full"
        } flex flex-col items-center justify-center`}
      >
        {["#whatwaiting", "#info", "#bingo", "#faqs"].map((link, index) => (
          <NavItems
            key={index}
            className="nav-link-mobile"
            title={["Что ждет", "Маршрут", "Бинго", "FAQs"][index]}
            linkTo={link}
            onClick={(e) => handleSmoothScroll(e, link)}
          />
        ))}
        <XMarkIcon
          onClick={closeNav}
          className="w-8 h-8 absolute cursor-pointer top-8 right-8 text-[#C2F23C]"
        />
      </div>
    </>
  );
};

export default MobileNav;
