import React from "react";

import ItemPortfolio from "./Itemportfolio/Itemportfolio";

import "./Portfolio.css";
import portfolio from "./Portfolio.json";

function Portfolio() {

    return (

        <main>

            {portfolio.map(
                (item, index) => 
                <ItemPortfolio
                  key= {index}
                  link= {item.link}
                  image= {item.image}
                  title= {item.title}

                ></ItemPortfolio>      
            )}

        </main>  
    )   
}

export default Portfolio;
