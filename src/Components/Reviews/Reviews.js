import React from 'react';
import './Reviews.css'
import useUser from '../Hooks/CustomHook';
import User from '../User/User';

const Reviews = () => {
    const [users] = useUser();
    // console.log(users);
    return (
        <div className='review-wrapper'>
            <h1>What Our Customer Say!</h1>
            <div className="review-wrap">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};
export default Reviews;