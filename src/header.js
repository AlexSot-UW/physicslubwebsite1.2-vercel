import React, { Component } from "react";
import logo from './logo.png';
import './header.css';

function Logo() {
    const logoStyle = {
        height: "7vh",
        backgroundColor: "#b3c9df",
     };
    return <img src={logo} style={logoStyle}/>;
}

class Header extends Component {

    render () {
        return (
            <div className="header">
                <a href="../public/index.html"><Logo id="logo"/></a>
                <button id="teamButton"><a href="../public/teams.html">Our Team</a></button>
                <button id="eventsButton"><a href="../public/events.html">Events</a></button>
                <button id="contactButton"><a href="../public/contact.html">Contact</a></button>
            </div>
        );
    }   
}

export default Header;