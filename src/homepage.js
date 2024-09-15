import React from "react";
import Header from "./header.js";
import './homepage.css';
import tree from './logo.png';

function LeftSide() {
    return (
        <div id="left-div" >
            <h1>AY. Jackson Physics Club</h1>
        </div>
    );
}

const Form = () => {
    return (
        <iframe className="darkBackground" src="https://docs.google.com/forms/d/e/1FAIpQLSdZVz0mVSFHOt6NyKIp9fuJx2phBS167cp1HC1aLt8y9yy51Q/viewform?embedded=true" width="640" height="600" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    );
}

function RightSide() {
    return (
      <div className="info">
        <Form />
      </div>
    );
}

function Body() {
    return (
        <div id="body-div">
            <LeftSide/>
            <RightSide/>
        </div>
    );
}

export function Homepage() {
    return (
        <div>
            {/* <Header /> */}
            <Body />
        </div>
    );
}