import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
            <div className={`header-wrap `}>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : "in-active"}>Home</NavLink>
                <NavLink to="/reviews" className={({ isActive }) => isActive ? "active" : "in-active"}>Reviews</NavLink>
                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : "in-active"}>Dashboard</NavLink>
                <NavLink to="/blogs" className={({ isActive }) => isActive ? "active" : "in-active"}>Blogs</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "active" : "in-active"}>About</NavLink>
            </div>

    );
};

export default Header;