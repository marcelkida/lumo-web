import './App.css';
import bg from "./images/background.jpeg";
import flame from './images/flame.png';
import './style/fonts.css';
import Count from "./Count";
import OverlayBurn from "./OverlayBurn";
import OverlayEmail from './OverlayEmail';
import Matchbox from './images/matchbox.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useRef } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



function LandingMobile() {

  const main = {
    width: '100%',
    height: '100%',
    position: 'fixed',
    left: '0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${bg})`,
    fontFamily: 'NeueMachina-Regular',
    letterSpacing: '-0.1em',
    padding: '0.5%',
    color: 'black',
    userSelect: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const subheader = {
    fontSize: '3vmax',
    marginLeft: '.5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  };

  const plus = {

  };

  const header = {
    fontSize: "14vw",
    textAlign: 'left',
    lineHeight: '.9',
    display: 'flex',
    fontFamily: 'NeueMachina-Medium',
    writingMode: 'vertical-rl'
  };

  const flameStyle = {
    width: '20vmax'
  };

  const matchStyle = {
    height: '50vh',
  };

  const firstSection = {
    display: "flex",
  };
  const secondSection = {
    display: "flex",
    justifyContent: 'space-around',
    height: '50vh'
  };

  return (
    <div>
    <div style={main}>
      
      <div style={firstSection}>
        
        <img src={flame} alt="flame" style={flameStyle}/>
        <div style={subheader}>
        NEXT BURN IN;
        </div>
        <div style={plus}>
          <OverlayBurn />
        </div>
      </div>

      <div>
        <Count/>
      </div>
      <div style={secondSection}>      
        <img src={Matchbox} style={matchStyle}></img>
        <div style={header}>
          DESTRUCTION BREEDS CREATION.
          <OverlayEmail/>
        </div>
      </div>

      </div>
    </div>
  );
}

export default LandingMobile;
