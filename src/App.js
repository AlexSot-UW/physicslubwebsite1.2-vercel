import './App.css';
import './header.css';
import React, {useState} from 'react';
import { Homepage } from './homepage.js';
import Events from './events.js';
import Team from './teams.js';
import Contact from './contacts.js';

import logo from './logo.png';
import './header.css';

function Logo() {
    const logoStyle = {
        height: "7vh",
        backgroundColor: "#b3c9df",
     };
    return <img src={logo} style={logoStyle}/>;
}

function App() {
  const [active, setActive] = useState("Homepage");
  return (
    <div id="page">
      <div className="header">
          <button id="teamButton" onClick={() => setActive("Homepage")}><Logo id="logo"/></button>
          <button id="teamButton" onClick={() => setActive("Team")}>Our Team</button>
          <button id="eventsButton" onClick={() => setActive("Events")}>Events</button>
          <button id="contactButton" onClick={() => setActive("Contacts")}>Contacts</button>
      </div>
      <div>
        {active === "Homepage" && <Homepage />}
        {active === "Events" && <Events />}
        {active === "Team" && <Team />}
        {active === "Contacts" && <Contact />}
      </div>
    </div>
  );
}

export default App;