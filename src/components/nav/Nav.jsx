import React from 'react'
import { Link } from 'react-router-dom';
import './nav.css';

function Nav() {
    return (
        <header>
            <Link to="/"> <h2>Kuple</h2></Link>
            <Link to="/product"><li>Product</li></Link>
            <Link to="/hooks"><li>Hook</li></Link>
            <Link to="/blog"><li>Blog</li></Link>
        </header>
    )
}

export default Nav
