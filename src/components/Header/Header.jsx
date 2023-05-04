import React from "react";

import "./Header.css";

import aryenneavatar from "../../assets/aryenne.jpg";

function header() {
    return(
        <header>
         <img src={aryenneavatar} alt="foto de rosto de Aryenne"/>
         <h1 id="nome-perfil">Aryenne Lipolt</h1>
         <h3 id="eventoSubtitulo">Aluna Comeia Academy</h3>
        </header>
    ) 
}

export default header;
