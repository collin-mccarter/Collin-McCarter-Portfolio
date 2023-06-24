import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <h1 className="navbar-brand-name">Collin McCarter</h1>
            </div>

            <ul className="navbar-menu">
                <li className="navbar-menu-item">Home</li>
                <li className="navbar-menu-item">About</li>
                <li className="navbar-menu-item">Portfolio</li>
                <li className="navbar-menu-item">Contact</li>
            </ul>
        </nav>
    );
}