import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav>
            <div className="logo">
                <Link to='/'>Logo</Link>
            </div>
            <div className="nav-links">
                <Link to='/'>Home</Link>
                <Link to='/about'>About me</Link>
                <Link to='/projects'>Projects</Link>
            </div>
        </nav>
    )
}

export default Header ;