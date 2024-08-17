import Bingo from "@/app/components/Bingo";
import Faqs from "@/app/components/Faqs";
import Footer from "@/app/components/Footer";
import Hero from "@/app/components/Hero";
import Info from "@/app/components/Info";
import MobileNav from "@/app/components/MobileNav";
import Nav from "@/app/components/Nav";
import WaitingFor from "@/app/components/WaitingFor";
import React, { useState } from "react";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden max-w-[1440px] bg-[#282828] text-white pb-5">
      <MobileNav nav={nav} closeNav={closeNav} />
      <Nav openNav={openNav} />
      <Hero />
      <WaitingFor />
      <Info />
      <Bingo />
      <Faqs />
      <Footer />
    </div>
  );
};

export default HomePage;
