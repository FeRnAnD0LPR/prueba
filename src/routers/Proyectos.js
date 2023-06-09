import React from "react";

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";

const Proyectos = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="PROYECTOS." text="Algunos de mis trabajos mas recientes" />
    <Work />
    <PricingCard />
    <Footer />
  </div>
  );
};

export default Proyectos;