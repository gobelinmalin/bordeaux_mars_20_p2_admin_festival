import React from 'react';
import festit from '../img/logo-festit.png';
import { Link } from 'react-router-dom';
import '../style.css';

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/"><img src={festit} className="img-brand" alt="Fest It"/></Link>
                        </div>
                        <div className="brand-interface">
                            Interface Administration
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;