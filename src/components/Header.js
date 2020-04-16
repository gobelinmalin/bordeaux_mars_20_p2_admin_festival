import React from 'react';
import festit from '../img/logo-festit.png';
import { Link } from 'react-router-dom';
import '../style.css';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container">
                    <div className="navbar-brand">
                        <Link to="/"><img src={festit} className="img-brand" alt="Fest It"/></Link>
                    </div>
                    <div className="brand-interface">
                        <Link to="/">Interface Administration</Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;