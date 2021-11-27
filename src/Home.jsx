import React, { Component, useState, useRef } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Landing from './Landing';
import LandingMobile from './LandingMobile';
import { useMediaQuery } from 'react-responsive';

function Home() {

  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 768px)",
  });

  return (
    <div>
      {isDesktopOrLaptop && (
      <>
      <Landing/>
      </>
    )}
      {!isDesktopOrLaptop && (
      <>
      <LandingMobile/>
      </>
    )}
    </div>
  );
}

export default Home;
