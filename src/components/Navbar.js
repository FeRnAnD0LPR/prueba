import "./NavbarStyles.css";

import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrolly >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : 
    "header"}>
        <Link to="/">
            <h1>Portafolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" :
        "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/acerca">Acerca</Link>
            </li>
            <li>
                <Link to="/contacto">Contacto</Link>
            </li>
            <li>
                <Link to="/educacion">Educacion</Link>
            </li>
            <li>
                <Link to="/experiencia">Experiencia</Link>
            </li>
            <li>
                <Link to="/habilidades">Habilidades</Link>
            </li>
            <li>
                <Link to="/proyectos">Proyectos</Link>
            </li>
        </ul>
        <div className="hamburger" onClick=
        {handleClick}>
            {click ? (
              <FaTimes size={20} style={{ color: "#fff"}} />  
            ) : (
                <FaBars size={20} style={{ color: "#fff"}} />
            )}
            
        </div>
    </div>
  );
};

export default Navbar