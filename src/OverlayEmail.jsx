import bg from "./images/background.jpeg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip'
import React, { Component, useState, useRef } from "react";
import matchbox from './images/matchbox.png';
import './style/fonts.css';
import './style/modal.css';

function OverlayEmail() {

    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    const [showTip, setShowTip] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const target = useRef(null);
    
    //variables for changing text for submit button.
    var validEmail = true;
    const [buttonText, setButtonText] = useState("Next");
    const changeText = (text) => setButtonText(text);   

    const buttonStyle = {
        background: 'none',
        border: 'none',
        fontFamily: 'NeueMachina-Regular',
        color: 'black',
        fontSize: '12vw',
        outline: 'none',
        zIndex: '10',
        position: 'relative'
    };

    const submitStyle = {
        background: 'none',
        border: '2px solid white    ',
        borderRadius: '3em',
        fontFamily: 'NeueMachina-Regular',
        color: 'white',
        fontSize: '2vmax',
        outline: 'none',
    };

    const main = {
        margin: '1%',
        display: 'flex',
        flexDirection: 'column',

        height: '100%'
    };

    const headerStyle = {
        fontFamily: 'NeueMachina-Medium',
        color: 'black',
        fontSize: '8.5 vw'
    };

    const contentHeader = {
        fontFamily: 'NeueMachina-Bold',
        color: 'white',
        fontSize: '3vw',
        marginBottom: '4vh'
    };

    const paragraph = {
        fontFamily: 'NeueMachina-Regular',
        color: 'white',
        fontSize: '2vmax',
    };

    const inputStyle= {
        boxSizing: "border-box",
        width: "100%",
        fontSize: '8.5vmin',
        background: 'none',
        color: "white",
        border: '0px',
        outline: 'none',
        boxShadow: 'none'
    };

    const hrStyle = {
        height: '.5vmax',
        color: 'white',
        border: 'white',
        background: 'white'
    };

    const mainSection = {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%'
    };

    const submitSection = {

    };


  return (
      
    <div>
        <>
      <Button variant="primary" onClick={handleShow} style={buttonStyle} className='btn'>
        *
      </Button>

      <Modal show={show} onHide={handleClose} className="email-modal" fullscreen={fullscreen}>
        <Modal.Header className='email-header' closeButton style={{border: 'none'}}>
        <div style={contentHeader}>
                SIGN UP FOR EXCLUSIVE ACCESS TO LUMO *
            </div>
        </Modal.Header>
        <div style={main}>
        <div style={mainSection}>

            
                <div>
                <hr style={hrStyle}/>
                <div style={headerStyle} className="fillWidth">
                    <input style={inputStyle} type="email" placeholder="NAME@EMAIL.COM"/>               
                </div>
                <hr style={hrStyle}/>
            </div>
                <div style={submitSection}>
                    <Button style={submitStyle} ref={target} onClick={() => {if (validEmail) {changeText("SUCCESS, CHECK YOUR EMAIL")} else {changeText("INVALID EMAIL")} setShowTip(true)}}>
                        SUBMIT
                    </Button>
                    <Overlay target={target.current} show={showTip} placement="right" className="email-overlay">
                        {(props) => (
                        <Tooltip id="tooltip-top" style={paragraph} className="overlay-example" {...props}>

                            {buttonText}

                        </Tooltip>
                        )}
                    </Overlay>
                    </div>
            </div>
        </div>
      </Modal>
      </>
    </div>
  );
}

export default OverlayEmail;
