//Importing Hero from the hero folder
import "./hero.scss";
// Import React 
// import React, { useEffect, useState } from 'react';


const Hero = () => {
    return (
        <div className="hero" >
            <div className="textContainer">
               <h1>Flips Valet Parking</h1> 
                <img src="/hero.png" alt="Hero Image" />
            </div>
            {/* <div className="imageContainer">
               
            </div>  */}
        </div>
    );
};

export default Hero;