import React from 'react';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import AboutContent from "../components/AboutContent";

const Acerca = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="ACERCA DE." text="Soy un desarrollador amigable y con una experiencia media" />
    <AboutContent />
    <Footer />
  </div>
  );
};

export default Acerca;