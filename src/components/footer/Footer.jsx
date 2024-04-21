import React from 'react';
import './footer.scss';

function Footer() {
    return (
        <footer className='footer'>
            <address>
               <a target ="_blank" href='mailto:bdajuste@gmail.com'><img src="/mail.png" alt="Email"/></a> 
                <h2>©2021 by Flórida International Parking System LLC</h2> 
            </address>
        </footer>
    );
}

export default Footer;