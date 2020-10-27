import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';
const Logo = () => {
    return (
        <Link to="/" className="Logo">
            Classic Body
        </Link>
    );
};

export default Logo;
