import React from "react";

import Itemportfolio from "../Itemportfolio/Itemportfolio";


import "./Portfolio.css";
import portfolio from "./Portfolio.json";

function Portfolio() {

    return (
        <main>

            {portfolio.map(
                (item, index) => 
                <Itemportfolio
                    key={index}
                    link={item.link}
                    image={item.image}
                    title={item.title}
                ></Itemportfolio>      
            )}

        </main>  
    );
}

export default Portfolio;
