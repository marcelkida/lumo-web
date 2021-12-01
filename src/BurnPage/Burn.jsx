import React, { Component, useState, useRef } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useMediaQuery } from 'react-responsive';
import './burn.css';
import '../style/fonts.css'

class Burn extends Component {
  render() {
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
    const placeholderText = "WRITE HERE WHAT YOU WOULD LIKE TO BURN TO THE IMMUTABLE BLOCKCHAIN.";

    const WriteHere = () => {

      /*
      function importAll(r) {
        return r.keys().map(r);
      }
      const images = importAll(require.context('./images/INCOMPLETE CUBES', false, /\.(png|jpe?g|svg)$/));
      */
      const Cube = function (number, bool) {
        const index = number;
        const isLit = bool;
        return { index, isLit };
      }

      const [cubeArray, setCubeArray] = useState([]);
      const [wordCount, setWordCount] = useState(0);
      const [input, setInput] = useState('')

      function updateWordCount(value) {
        setWordCount(value.split(' ').length);
      }

      function getRandomInt(max) {
        return Math.floor(Math.random() * max);
      }

      function randomCubeArray() {
        let randomArray = [];
        //let randomArray = Array(100).fill().map({number: getRandomInt(50), isLit: Math.random() < 0.5});
        //randomArray = Array(100).fill().map(Math.random(1,50));
        //console.log(Array(100).fill().map(Math.random));
        for (var i = 0; i < 900; i++) {
          randomArray.push({ number: getRandomInt(50) + 1, isLit: Math.random() < 0.05 });
        }
        console.log(randomArray);
        setCubeArray(randomArray);
      }
      return (
        <div>
          <div className='write'>
            <div className='write-left'>
              <div className='write-header'>

                <div className='write-header-left'>
                  BURN YOUR MANIFESTATION
                </div>
                <div className='write-header-right'>
                  {wordCount}/120 Words
                </div>
              </div>
              <div className='write-inputsection'>
                <input type="text"
                  value={input}
                  onInput={e => { setInput(e.target.value); updateWordCount(input); randomCubeArray() }}
                  placeholder={placeholderText}
                  className='write-input'>
                </input>
              </div>
              <div className='write-footer'>
                ENCRYPTING YOUR MANIFESTATION;
              </div>
            </div>
            <div className='write-right'>
              <div className='write-output'>
                <div className='cube-table'>
                  {cubeArray.map((element, idx) => (
                    <div key={idx} className='cube-block'>
                      <img
                        className={'incomplete-' + element.isLit.toString()}
                        src={require('./images/INCOMPLETECUBES/IncompleteCube' + element.number + '.png').default} />
                    </div>))}
                </div>
              </div>
              <div className='write-buttonsection'>
                <button className='write-button'>GENERATE YOUR NFT</button>
              </div>
            </div>
          </div>
          <div>

          </div>
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
        <Header />
        <WriteHere />
        <Footer />
      </div>
    );
  }
}

export default Burn;
