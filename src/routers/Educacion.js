import React from 'react';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';

const Educacion = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="EDUCACION." text="tengo una educaion universitaria en Ing. de sistemas en la Universidad Autonoma Tomas Frias" />
    <Footer />
  </div>
  );
};

export default Educacion;