import "./navbar.scss";
import {motion} from "framer-motion";
import React from "react";

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                {/* Animate Name */}
                <motion.span
                initial={{ opacity: 0, scale: 0.5 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
                >Flips Valet Parking
                </motion.span> 
                <div className="pages">
                    <a href="./about.html">About Page</a>
                    <a href="./home.html">Home</a>
                    <a href="./contact.html">Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;