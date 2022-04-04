import React from 'react';
import './Reviews.css'
import { Link } from 'react-router-dom';
import useUser from '../Hooks/CustomHook';
import User from '../User/User';

const Reviews = () => {
    const [users, setUser] = useUser();
    // console.log(users);
    return (
        <div>
            <div className="review-wrap">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};
export default Reviews;