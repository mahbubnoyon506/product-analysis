import React from 'react';
import './User.css'

const User = ({ user }) => {
    // console.log(user);
    const { image, name, rating, review } = user
    return (
        <div className='user-wrap'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{rating}</p>
            <p>{review}</p>
        </div>
    );
};

export default User;