import React from 'react';
import festit from '../img/logo-festit.png';
import '../style.css';

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <div className="navbar-brand">
                            <a href="index.html"><img src={festit} className="img-brand" alt="Fest It"/></a>
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