import React, { Component, useState} from "react";
import Header from "./header.js";
import './events.modules.css';
import logo from './logo.png';
import stargazing from './rohan.jpg';
import demo from './max.jpg';
import speaker from './jimmy.jpg';
import lecture from './andrew.jpg'; 

const eventsRaw = [["Stargazing Events", 
                    "Next Event: TBD", 
                    "Where: AYJ Back Field",
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    stargazing],
                   ["Physics Demo's", 
                    "Next Demo: TBD",
                    "Where: Room 254",
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    demo],
                   ["Guest Speakers", 
                    "Next Guest Speaker: TBD",
                    "Where: Room 254",
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    speaker],
                   ["Weekly Lectures", 
                    "When: Thursdays Lunch, Weekly",
                    "Where: Room 254" , 
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    lecture]];

let title = '';

const event = (name, time, location, description, imagePath) => {
    return {
        name: name,
        time: time,
        location: location,
        description: description,
        imagePath: imagePath,
    };
}

function events () {
    let eventsArray = [];
    for (let i = 0; i < eventsRaw.length; i++){
        let name = eventsRaw[i][0];
        let time = eventsRaw[i][1];
        let location = eventsRaw[i][2];
        let description = eventsRaw[i][3];
        let imagePath = eventsRaw[i][4]
        let newEvent = event(name, time, location, description, imagePath);
        eventsArray[i] = newEvent;
    }
    return eventsArray;
}

const Slideshow = () => {
    let eventsArray = events(); 
    
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
      const prevIndex = (currentIndex - 1 + eventsRaw.length) % eventsRaw.length;
      setCurrentIndex(prevIndex);
    };
   
    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1 + eventsRaw.length) % eventsRaw.length;
        setCurrentIndex(nextIndex);
    };

    let previous = `<`;
    let next = `>`;

    return (
        <div className="event">
        <h2>{eventsArray[currentIndex].name}</h2>
        <div className="event-description">
            <p>{eventsArray[currentIndex].description}</p>
            <img className="eventImg" src={`${eventsArray[currentIndex].imagePath}`}></img>
        </div>
        <div className="buttons">
            <button onClick={goToPreviousSlide} className="switcherButtons">{previous}</button>
            <button onClick={goToNextSlide} className="switcherButtons">{next}</button>
        </div>
      </div>
    );
};


function LeftSide() {
    return (
        <div id="left-div" >
            <h1>Types of Events</h1>
        </div>
    );
}

function RightSide() {
    return (  
        <div id="right-div">
            <Slideshow />
        </div>
    );
}

function Body() {
    return (
        <div id="body-div">
            <LeftSide />
            <Slideshow />
        </div>
    );
}

function Events() {
    return (
        <div>
            {/* <Header /> */}
            <Body />
        </div>
    );
}

export default Events;