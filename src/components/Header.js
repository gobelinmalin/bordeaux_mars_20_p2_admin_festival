import React from 'react';
import festit from '../img/logo-festit.png';
import '../style.css';

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-light">
                    <div className="container">
                        <a href="index.html" className="navbar-brand"><img src={festit} className="img-brand" alt="Fest It"/></a>
                        <div className="brand-interface">
                            Interface Administration
                        </div>
                        <div>
                            <button className="navbar-toggler burger-button" data-toggle="collapse" data-target="#navbarMenu">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;