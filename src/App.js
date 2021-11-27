
import './style/fonts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component, useState, useRef } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import LandingMobile from './LandingMobile';
import Burn from './BurnPage/Burn';
import { useMediaQuery } from 'react-responsive';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="burn" element={<Burn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
