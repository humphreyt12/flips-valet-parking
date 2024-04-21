// The About Our Company Section
import {motion, useScroll, useTransform} from "framer-motion"; //Allows and controlls animation
import React from 'react';
import "./about.scss";

const About = () => {

    const {scrollYProgress} = useScroll({
        offset: ["end start"] 
    });

const y = useTransform(scrollYProgress, [0,1], ["0%", "-300%"]);
    return(
        <div className="about">
            <div className="wrapper">
                <motion.div className="textContainer" style={{y}}>
                    <h2>About Our Company</h2>
                    <p>
                        Flips Valet Parking is a locally owned and operated in Florida. 
                        Over 23 years, we've established long-term relationships by 
                        providing quality service for a wide range of partners.
                    </p>
                </motion.div>   
            </div>
            <motion.div className="imageContainer" style={{y}}>
                <img src="/photo6.JPG" alt="Photo 6" />
            </motion.div> 
        </div>
    );
};

export default About;