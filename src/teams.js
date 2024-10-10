import React, { Component, useState} from "react";
import './teams.modules.css';
import logo from './logo.png';
import rohan from './rohan.jpg';
import max from './max.jpg';
import jimmy from './jimmy.jpg';
import andrew from './andrew.jpg'; 

const peopleRaw = [["Rohan Raina", 
                    "Co-President", 
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    rohan],
                   ["Max Chen", 
                    "Co-President",
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    max],
                   ["Jimmy Tao", 
                    "Vice-President", 
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    jimmy],
                   ["Andrew Wang", 
                    "Vice-President",
                    "Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum",
                    andrew]];

let title = '';

const person = (name, role, description, imagePath) => {
    return {
        name: name,
        role: role,
        description: description,
        imagePath: imagePath,
    };
}

function peoples () {
    let peopleArray = [];
    for (let i = 0; i < peopleRaw.length; i++){
        let name = peopleRaw[i][0];
        let role = peopleRaw[i][1];
        let description = peopleRaw[i][2];
        let imagePath = peopleRaw[i][3]
        let newPerson = person(name, role, description, imagePath);
        peopleArray[i] = newPerson;
    }
    return peopleArray;
}

const Slideshow = () => {
    let peopleArray = peoples(); 
    
    // ... useState and other functions
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPreviousSlide = () => {
      const prevIndex = (currentIndex - 1 + peopleRaw.length) % peopleRaw.length;
      setCurrentIndex(prevIndex);
    };
  
    // ... goToNextSlide function
  
    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1 + peopleRaw.length) % peopleRaw.length;
        setCurrentIndex(nextIndex);
    };

    let previous = `<`;
    let next = `>`;

    return (
      <div className="person">
        <h2>{peopleArray[currentIndex].name}</h2>
        <div className="person-description">
            <p>{peopleArray[currentIndex].description}</p>
            <img className="personImg" src={`${peopleArray[currentIndex].imagePath}`}></img>
        </div>
        <div className="buttons">
            <button onClick={goToPreviousSlide} className="switcherButtons">{previous}</button>
            <button onClick={goToNextSlide} className="switcherButtons">{next}</button>
        </div>
      </div>
    );
};

// function PeopleList () {
//     let peopleArray = peoples(); 

//     return (
//         <div id="events-body-sub-div">
//             {
//                 peopleArray.map(function(person){
//                     return (
//                         <div className="events-list-element">
//                             <h1>{person.name}</h1>
//                             <div className="events-description">
//                                 <p>{event.description}</p>
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     );
// }

function LeftSide() {
    return (
        <div id="left-div" >
            <h1>Our Team</h1>
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

function Team() {
    return (
        <div>
            {/* <Header /> */}
            <Body />
        </div>
    );
}

export default Team;