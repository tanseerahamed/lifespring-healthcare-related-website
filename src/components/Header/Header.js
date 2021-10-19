import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const{user, logOut} = useAuth();

    const activeStyle = {
        fontWeight: "bold",
        textAlign: 'center',
        textDecoration: 'none',
        padding: '5px',
    }
    return (
        <div>
            <div>
            <nav className='header'>
            <NavLink className='header-style' activeStyle={activeStyle} to="/home">Home</NavLink>
            <NavLink className='header-style' activeStyle={activeStyle} to="/services">Services</NavLink>
            <NavLink className='header-style' activeStyle={activeStyle} to="/professionals">Professionals</NavLink>
            <NavLink className='header-style' activeStyle={activeStyle} to="/about">About</NavLink>

            {user.email && <span style={{ color: 'blue' }}>Hello {user.displayName} </span>}

            {user.email ? <button className="btn btn-warning" onClick={logOut}>Log Out</button>
            :
            <NavLink className='header-style' activeStyle={activeStyle} to="/login">Login</NavLink>}

            </nav>
        </div>
        </div>
    );
};

export default Header;