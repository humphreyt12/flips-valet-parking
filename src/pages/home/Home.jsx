//Importing the Hompage
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Services from "../../components/services/Services";

// Import React
// import React, { useEffect, useState } from 'react';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="textContainer">
        <h1>Flips Valet Parking</h1>
        <img src="/hero.png" alt="Hero Image" />
      </div>
      {/* <div className="imageContainer">
               
        </div>  */}
    <section id="services"><Services/></section>
    </div>
  );
};

export default Home;
