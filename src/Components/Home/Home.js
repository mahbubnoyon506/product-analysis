import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import useUser from '../Hooks/CustomHook';
import User from '../User/User';
import car from '../../images/car.jpg'

const Home = () => {
    const [users, setUser] = useUser();
    // console.log(users);
    return (
        <div>
            <div className="home-content">
                <div className="content">
                    <h2></h2>
                    <h4></h4>
                    <p></p>
                </div>
                <img src={car} alt="" />
            </div>
            <div className="users-wrap">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            <Link className='show-all-btn' to='/reviews'>All Reviews</Link>
        </div>
    );
};

export default Home;