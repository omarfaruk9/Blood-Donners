import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png';

const Header = () => {
    return (
        <div className="header">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container m-0 mx-auto">
                    <a class="navbar-brand" href="/"> <img src={logo} className="logo" alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a class="nav-link active fs-5 fw-bold" aria-current="page" href="/">Home</a>
                            </li>
                            <li>
                                <a class="nav-link active fs-5 fw-bold" aria-current="page" href="/">About Us</a>
                            </li>
                            <li>
                                <a class="nav-link active fs-5 fw-bold" aria-current="page" href="/">Our Members</a>
                            </li>
                            <li><a class="nav-link active fs-5 fw-bold" aria-current="page" href="/">Join With Us</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="our-info col-lg-12">
                <h1>Blood <span className="text-warning">Donor Club</span></h1>
                <p>"Opportunities knock the door sometimes, so don’t let it go and donate blood.” Omar</p>
                <h2>We Have <span className="text-warning">1000+</span> Members!...</h2>
            </div>
        </div>
    );
};

export default Header;