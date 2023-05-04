import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
    return (
        <div id="menu">

            <nav>
                <ul>
                   <li className="buttom"><Link to="/">CURRÍCULO</Link></li>
                   <li className="buttom"><Link to="/portfolio">PORTFÓLIO</Link></li>
                   <li className="buttom"><Link to="/contato">CONTATO</Link></li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;
