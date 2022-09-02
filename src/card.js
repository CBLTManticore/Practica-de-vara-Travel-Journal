import React from "react";
import path from "./path.png";

export default function Card (props) {
    return (
        <div className="container">
            <img className="image" src={props.image} />
            <div className="info">
                <div className="location">
                    <img className="destiantion" alt="path" src={path} />
                    <span className="destination">{props.country}</span>
                    <a className="link" href={props.url}>Visit on Google Maps</a>
                </div>
                <h1 className="title">{props.title}</h1>
                <div className="date">
                    <p>{props.date}</p>
                </div>
                <p className="description">{props.description}</p>
            </div> 
        </div>
    )
}