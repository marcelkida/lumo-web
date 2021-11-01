import bg from "./images/background.jpeg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component, useState, useRef } from "react";
import matchbox from './images/matchbox.png';
import './style/fonts.css';
import './style/modal.css';

function OverlayEmail() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const buttonStyle = {
        background: 'none',
        border: 'none',
        fontFamily: 'NeueMachina-Regular',
        color: 'black',
        fontSize: '12vw',
        outline: 'none',
        zIndex: '1',
    };

    const main = {
        margin: '1%'
    }

    const headerStyle = {
        fontFamily: 'NeueMachina-Medium',
        color: 'black',
        fontSize: '6vw'
    };

    const matchStyle = {
        width: '100%'
    };

    const content = {
        display: 'flex',

    };

    const contentHeader = {
        fontFamily: 'NeueMachina-Bold',
        color: 'black',
        fontSize: '1.5vw',
        marginBottom: '4vh'
    };

    const paragraph = {
        fontFamily: 'NeueMachina-Regular',
        color: 'white',
        fontSize: '1.2vw',
        textIndent: '1vw',
        marginBottom: '2vh'
    };
  
  return (
      
    <div>
        <>
      <Button variant="primary" onClick={handleShow} style={buttonStyle} className='btn'>
        *
      </Button>

      <Modal show={show} onHide={handleClose} className="special-modal" size="lg">
        <div style={main}>
            <div style={headerStyle}>
                *BURN TO BUILD <br></br> *INVITE TO CREATE
            </div>
            <div style={content}>
                <div>
                    <img src={matchbox } style={matchStyle}></img>
                </div>
                <div>
                    <div style={contentHeader}>
                        *WHAT IS A BURN EVENT?
                    </div>
                    <div style={paragraph}>
                        The burn event is a ritual that invites and initiate members to join your House. It is a sacred nexus where each individual is called forth to collectively let go of the past, the future, and all those who do not serve to make space for the now and the new.
                    </div>
                    <div style={paragraph}>
                        Your house is a powerful vehicle for change and manifestation, empowering you and your community to create and will the world towards your collective purpose.
                    </div>
                    <hr style={{color: 'white', height: '2px'}}></hr>
                </div>
            </div>
        </div>
      </Modal>
      </>
    </div>
  );
}

export default OverlayEmail;
