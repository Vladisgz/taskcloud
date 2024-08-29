import React from "react";
import NavItems from "./NavItems";
import Image from "next/image";
import logo from "../../public/logo.svg";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { smoothScroll, smoothScrollToTop } from "../utils";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="sticky top-0 z-10 w-full bg-inherit shadow-md">
      <div className="w-[95%] h-[68px] flex items-center justify-between mx-auto text-white">
        <Link href="/" onClick={smoothScrollToTop}>
          <Image src={logo} alt="Nav Logo" />
        </Link>
        <div className="hidden lg:flex space-x-16">
          {["#whatwaiting", "#info", "#bingo", "#faqs"].map((link, i) => (
            <NavItems
              key={i}
              className="nav-link"
              title={["Что ждет", "Маршрут", "Бинго", "FAQs"][i]}
              linkTo={link}
              onClick={(e) => smoothScroll(e, link)}
            />
          ))}
        </div>
        <div
          onClick={openNav}
          className={`w-8 lg:hidden h-8 cursor-pointer text-[#A6ABB3]`}
        >
          <Bars3Icon />
        </div>
      </div>
    </div>
  );
};

export default Nav;
