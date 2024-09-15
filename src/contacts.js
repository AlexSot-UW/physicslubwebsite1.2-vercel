import React, { Component, useState} from "react";
import emailjs from '@emailjs/browser';
import Header from "./header.js";
import './contacts.css';
import instagram from './instagram.png';
import discord from './discord.png';
import gmail from './gmail.png';

function LeftSide() {
    return (
        <div id="left-div" >
            <h1>Contact Us!</h1>
        </div>
    );
}

const ContactUs = () => {
    const form = useState();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_6lqnxta', 'template_lalzpnd', form.current, {
          publicKey: 'Ul2ZLHDv4VgkhSg2B',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
  
    return (
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="formContent">
          <label className="blueBackground">Name</label>
          <input type="text" name="user_name" />
          <label className="blueBackground">Email</label>
          <input type="email" name="user_email" />
          <label className="blueBackground">Message</label>
          <textarea name="message" />
          <input id="submitButton" type="submit" value="Send" />
        </div>
      </form>
    );
  };

const ClubContacts = () => {
  return (
    <div className="contactsPanel">
        <a href="https://www.instagram.com/ayjphysicsclub/"><img className="logo" src={instagram}/></a>
        <img className="logo" src={discord}/>
        <img className="logo" id="gmail" src={gmail}/>
    </div>
  );
}

function RightSide() {
    return (  
        <div id="right-div">
            <ContactUs />
            <ClubContacts/>
        </div>
    );
}

function Body() {
    return (
        <div id="body-div">
            <LeftSide />
            <RightSide />
        </div>
    );
}

function Contact() {
    return (
        <div>
            {/* <Header /> */}
            <Body />
        </div>
    );
}

export default Contact;