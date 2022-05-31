import React from 'react';
import './Footer.css'

const Footer = () => {
    const yearNow = new Date().getFullYear();
    return (
        <div className='footer'>
            <p>Copy right {yearNow}. All right reserved</p>
        </div>
    );
};

export default Footer;