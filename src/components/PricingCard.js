import { Link } from "react-router-dom";
import "./PricingCardStyles.css";

import React from "react";

const PricingCard = () => {
    return <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>- Basico -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Dias -</p>
                <p>- 3 Paginas -</p>
                <p>- Presentacion -</p>
                <p>- Responsivo -</p>
                <Link to="/contacto" className="btn">COMPRAR AHORA</Link>
            </div>
            <div className="card">
                <h3>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 2 Dias -</p>
                <p>- 5 Paginas -</p>
                <p>- Presentacion -</p>
                <p>- Responsivo -</p>
                <Link to="/contacto" className="btn">COMPRAR AHORA</Link>
        </div>
        <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 5 Dias -</p>
                <p>- 8 Paginas -</p>
                <p>- Presentacion -</p>
                <p>- Responsivo -</p>
                <Link to="/contacto" className="btn">COMPRAR AHORA</Link>
            </div>
        </div>
    </div>
};

export default PricingCard;