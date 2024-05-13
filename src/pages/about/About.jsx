// The About Our Company Section
import {motion, useScroll, useTransform} from "framer-motion"; //Allows and controlls animation
import React from 'react';
import "./about.scss";
import Navbar from "../../components/navbar/Navbar";

const About = () => {

    const {scrollYProgress} = useScroll({
        offset: ["end start"] 
    });

const y = useTransform(scrollYProgress, [0,1], ["0%", "-300%"]);
    return(
        <div className="about">
            <Navbar />
            <div className="wrapper">
                <motion.div className="textContainer" style={{y}}>
                    <h2>About Our Company</h2>
                    <p>
                        Flips Valet Parking is a locally owned and operated in Florida. 
                        Over 23 years, we've established long-term relationships by 
                        providing quality service for a wide range of partners.
                    </p>
                    <br />
                    <h2>Why Choose Us?</h2>
                    <p>
                        We will provide quality services, exceptional efficiency, and the highest level of proffessionalism.
                        No matter what service you're looking for, we guarantee to meet and exceed your expectations and ensure your satisfication.
                        Insurance, on-time Guarantee, Budget and Cost Friendly.
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