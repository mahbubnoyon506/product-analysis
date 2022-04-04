import React from 'react';
import image from '../../images/oops.webp'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='not-found'>
           <img src={image} alt="" /> 
        </div>
    );
};

export default NotFound;