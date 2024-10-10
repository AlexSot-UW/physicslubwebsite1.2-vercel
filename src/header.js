import React, { Component } from "react";
import logo from './logo.png';
import './header.modules.css';

function Logo() {
    const logoStyle = {
        height: "7vh",
        backgroundColor: "#a4c1dd",
     };
    return <img src={logo} id="headerLogo"/>;
}

class Header extends Component {

    render () {
        return (
            <div className="header">
                <button><a href="../public/index.html"><Logo id="logo"/></a></button>
                <button id="teamButton"><a href="../public/teams.html">Our Team</a></button>
                <button id="eventsButton"><a href="../public/events.html">Events</a></button>
                <button id="contactButton"><a href="../public/contact.html">Contact</a></button>
            </div>
        );
    }   
}

export default Header;