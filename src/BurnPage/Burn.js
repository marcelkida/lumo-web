import React, { Component, useState, useRef } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import './burn.css';
import '../style/fonts.css'

function Burn() {

  const Header = () => {
    return (
      <div className='header'>
        <div className='header-logo'>
          LUMO
        </div>
        <div className='header-plus'>
          +
        </div>
      </div>
    );
  }
  var wordCount = 100;
  const placeholderText = "WRITE HERE WHAT YOU WOULD LIKE TO BURN TO THE IMMUTABLE BLOCKCHAIN.";

  const WriteHere = () => {
    return (
      <div className='write'>
        <div className='write-header'>
          <div className='write-header-left'>
            BURN YOUR MANIFESTATION
          </div>
          <div className='write-header-right'>
            {wordCount}/120 Words
          </div>
        </div>
        <div className='write-inputsection'>
          <input type="text" placeholder={placeholderText} className='write-input'></input>
        </div>
        <div className='write-footer'>
          ENCRYPTING YOUR MANIFESTATION;
        </div>
        <div className='write-output'>

        </div>
        <div className='write-buttonsection'>
          <button className='write-button'>GENERATE YOUR NFT</button>
        </div>
      </div>
    );
  }

  const Output = () => {
    return (
      <div>

      </div>
    );
  }

  const id = "0x4278sfijbsijdvbhsjhb"
  const number = 420

  const Footer = () => {
    return (
      <div className='footer-body'>
        <div className='footer-main'>
          <div className='footer-header'>
            <div>
              DIGITAL CERTIFICATE OF AUTHENTICITY
            </div>
            <div>
              ?
            </div>
          </div>
          <div className='footer-footer'>
            <div className='footer-left'>
              This is your digital certificate of authenticity for the Lumo Genesis Cube NFT
            </div>
            <div className='footer-right'>
              <div>
                Issued to; {id}
              </div>
              <div>
                Number {number} / 1000
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }



  return (
    <div>
      <Header/>
      <WriteHere/>
      <Footer/>
    </div>
  );
}

export default Burn;
