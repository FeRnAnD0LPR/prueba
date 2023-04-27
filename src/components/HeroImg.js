import "./HeroImgStyles.css";

import React from "react";

import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
    return ( 
    <div clasName="hero">
        <div className="mask">
            <img className="into-img" src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>React Developer.</h1>
            <div>
                <Link to="/proyectos" className="btn">Proyectos</Link>
                <Link to="/contacto" className="btn btn-light">Contacto</Link>
            </div>
        </div>
    </div>
    );
};

export default HeroImg;