import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-md navbar-light bg-blue">
                    <div className="container">
                        <a href="index.html" className="navbar-brand"><img src="img/logo-festit.png" className="img-brand" alt="Fest It"/></a>
                        <div>
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