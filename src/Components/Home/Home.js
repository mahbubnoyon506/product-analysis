import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import useUser from '../Hooks/CustomHook';
import User from '../User/User';
import car from '../../images/car.jpg'

const Home = () => {
    const [users] = useUser();
    // console.log(users);
    return (
        <div className='home-wrapper'>
            <div className="home-content">
                <div className="content">
                    <h1>2023 Audi A6 e-tron</h1>
                    <h3><span>Starting at</span>$80,000</h3>
                    <p>Audi continues its electric-vehicle assault with the A6 e-tron sedan, which is aimed directly at the Tesla Model S.</p>
                </div>
                <img src={car} alt="" />
            </div>
            <h2>Customer Reviews</h2>
            <div className="users-wrap">
                {
                   users.length > 3 ? users.map(user => <User key={user.id} user={user}></User>) : users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
            <Link className='show-all-btn' to='/reviews'>All Reviews</Link>
        </div>
    );
};

export default Home;