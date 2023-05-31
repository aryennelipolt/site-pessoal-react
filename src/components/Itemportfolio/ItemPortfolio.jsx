import React from "react";

import "./Itemportfolio.css";

function Itemportfolio(props) {
    return (
        <div className="item-portfolio">
            <a href={props.link} target="_blanck">
                <img src={props.image} alt="Capa Aryenne"/>
                <p>{props.title}</p>
            </a>
        </div>
    );
}

export default Itemportfolio;
