import "./AboutContentStyles.css";

import React from "react";

import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

const AboutContent = () => {
    return (
    <div className="about">
        <div className="left">
            <h1>Quien soy?</h1>
            <p>Soy un desarrollador de extremo de fuente de reacción. Creo sitios web seguros responsivos para mis clientes</p>
            <Link to="/contacto">
                <button className="btn">Contacto</button>
            </Link>
        </div>

        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default AboutContent;