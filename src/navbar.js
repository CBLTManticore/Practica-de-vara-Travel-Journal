import React from "react";
import globe from "./globe.png";

export default function Navbar () {
    return (
        <div>
            <nav className="navigation">
                <img className="logo" alt="globe" src={globe} />
                <span>my travel journal</span>
            </nav>
        </div>
    )
}