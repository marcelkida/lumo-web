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



function App() {

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
    fontSize: "12vw",
    textAlign: 'left',
    lineHeight: '.9',
    display: 'flex',
    fontFamily: 'NeueMachina-Medium',
  };

  const flameStyle = {
    width: '20vmax'
  };

  const matchStyle = {
    position: 'relative',
    height: '100vmin',
    userSelect: 'none',
    cursor: 'grab',
    userDrag: 'none'
  };

  const firstSection = {
    display: "flex",
  };

  const elemRef = useRef(null)
  const dragProps = useRef()
  
  const initialiseDrag = event => {
    const { target, clientX, clientY } = event
    const { offsetTop, offsetLeft } = target
    const { left, top } = elemRef.current.getBoundingClientRect()
    
    dragProps.current = {
      dragStartLeft: left - offsetLeft,
      dragStartTop: top - offsetTop,
      dragStartX: clientX,
      dragStartY: clientY
    }
    window.addEventListener('mousemove', startDragging, false)
    window.addEventListener('mouseup', stopDragging, false)
  }
  
  
  const startDragging = ({ clientX, clientY }) => {    
    elemRef.current.style.transform = `translate(${dragProps.current.dragStartLeft + clientX - dragProps.current.dragStartX}px, ${dragProps.current.dragStartTop + clientY - dragProps.current.dragStartY}px)`
  } 

  const stopDragging = () => {
    window.removeEventListener('mousemove', startDragging, false)
    window.removeEventListener('mouseup', stopDragging, false)
  }

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
      <div style={header}>
        DESTRUCTION BREEDS CREATION.
        <OverlayEmail/>
      </div>
      </div>
      <div >
      <img src={Matchbox}       
      onMouseDown={initialiseDrag}
      ref={elemRef}
      style={matchStyle}
      draggable='false'
      className='d-none d-lg-block'></img>
    </div>
    </div>
  );
}

export default App;
