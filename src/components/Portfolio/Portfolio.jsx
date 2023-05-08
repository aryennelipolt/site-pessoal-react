import React from "react";

import ItemPortfolio from "./ItemPortfolio/ItemPortfolio";

import "./Portfolio.css";
import Portfolio from "./Portfolio.json";

function Portfolio() {

    return (

        <main>

            {Portfolio.map(
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
