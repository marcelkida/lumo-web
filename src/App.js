import './App.css';
import bg from "./images/background.jpeg";
import flame from './images/flame.png';
import DateCountdown from 'react-date-countdown-timer';
import './style/fonts.css';
import Count from "./Count";
import Button from 'react-bootstrap/Button';
import Overlay from 'react-bootstrap/Overlay';
import React, { Component, useState, useRef } from "react";


function App() {

  const [show, setShow] = useState(false);
  const target = useRef(null);

  const main = {
    width: '100%',
    height: '100vh',
    position: 'fixed',
    left: '0',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url(${bg})`,
    fontFamily: 'NeueMachina-Regular',
    padding: '0.5%'
  };

  const subheader = {
    fontSize: '',
    marginLeft: '.5%'
  };

  const header = {
    fontSize: "12vw",
    textAlign: 'left',
    lineHeight: '.9',
  };

  const flameStyle = {
    width: '20%'
  };

  const firstSection = {
    display: "flex",
  };
  return (
    <div className="App" style={main}>
      <div style={firstSection}>
        <img src={flame} alt="flame" style={flameStyle}/>
        <div style={subheader}>
        NEXT BURN IN;
        </div>

        <Button variant="danger" ref={target} onClick={() => setShow(!show)}>
        Click me to see
      </Button>
      <Overlay target={target.current} show={show} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div
            {...props}
            style={{
              backgroundColor: 'rgba(255, 100, 100, 0.85)',
              padding: '2px 10px',
              color: 'white',
              borderRadius: 3,
              ...props.style,
            }}
          >
            Simple tooltip
          </div>
        )}
      </Overlay>

      </div>
      <div>
        <Count/>
      </div>
      <div style={header}>
        DESTRUCTION BREEDS CREATION
      </div>
    </div>
  );
}

export default App;
