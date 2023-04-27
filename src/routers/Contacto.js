import React from 'react';

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";
import HeroImg2 from '../components/HeroImg2';
import Form from '../components/Form';

const Contacto = () => {
  return (
  <div>
    <Navbar />
    <HeroImg2 heading="CONTACTOS." text="lets have a chat" />
    <Form />
    <Footer />
  </div>
  );
};

export default Contacto;