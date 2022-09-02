import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Navbar from "./navbar.js";
import Card from "./card.js";
import fuji from "./fuji.png";
import sydney from "./sydney.png";
import geiranger from "./geiranger.png";

function App () {
    return (
        <div>
            <Navbar />
            <Card 
                image={fuji}
                country= "Japan"
                url= "https://goo.gl/maps/U6aeuS7E2TbhwgWN9"
                date= "12 Jan, 2021 - 24 Jan, 2021"
                title= "Mount Fuji"
                description= "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."
            />
            <Card 
                image={sydney}
                country="Australia"
                url= "https://goo.gl/maps/K2dEmiP8sSfS6aQs8"
                date="27 May, 2021 - 8 Jun, 2021"
                title="Sydney Opera House"
                description="The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings"
            />
            <Card
                image={geiranger}
                country="Norway" 
                url="https://goo.gl/maps/mv14t1yvNz7sbgyz8"
                date="01 Oct, 2021 - 18 Nov, 2021"
                title="Geirangerfjord"
                description="The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality."
            />
        </div>
    )
}

ReactDOM.render (<App />, document.getElementById("root"))