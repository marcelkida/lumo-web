import bg from "./images/background.jpeg";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { Component, useState, useRef } from "react";
import matchbox from './images/matchbox.png';
import './style/fonts.css';
import './style/modal.css';

function OverlayBurn() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const buttonStyle = {
        background: 'none',
        border: 'none',
        fontFamily: 'NeueMachina-Regular',
        color: 'black',
        fontSize: '6vmax',
        position: 'absolute',
        right: '0',
        paddingTop: '0',
        marginTop: '-2%',
        outline: 'none',
        zIndex: '10',
    };

    const main = {
        margin: '1%',
    }

    const headerStyle = {
        fontFamily: 'NeueMachina-Medium',
        color: 'black',
        fontSize: '6vmax',
        lineHeight: '.9',
        marginBottom: '4vh',
        letterSpacing: '-0.05em',
    };

    const matchStyle = {
        width: '15vmax',
        height: 'auto',
        userDrag: 'none'
    };

    const content = {
        display: 'flex',
    };

    const contentHeader = {
        fontFamily: 'NeueMachina-Bold',
        color: 'black',
        fontSize: '1.5vmax',
        marginBottom: '4vmax'
    };

    const paragraph = {
        fontFamily: 'NeueMachina-Regular',
        color: 'white',
        fontSize: '1.2vmax',
        textIndent: '1vmax',
        marginBottom: '2vmax'
    };
    
    const rhs = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    };
  
  return (
      
    <div>
        <>
      <Button variant="primary" onClick={handleShow} style={buttonStyle} className='btn'>
        +
      </Button>

      <Modal show={show} onHide={handleClose} className="special-modal" size='xl'>
      <Modal.Header closeButton style={{border: 'none'}}>
        </Modal.Header>
        <div style={main}>
            <div style={headerStyle}>
                *BURN TO BUILD <br></br> *INVITE TO CREATE
            </div>
            <div style={content}>
                <div style={{width: '200%', display: 'flex', justifyContent: 'center'}}>
                    <img src={matchbox} style={matchStyle}></img>
                </div>
                <div style={rhs}>
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

export default OverlayBurn;
