import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContaxt } from '../../../App';

const Navbar = () => {
    const { isDoctor} = useContext(UserContaxt);

    return (
        <nav className="navbar navbar-expand-lg navbar-light ">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mt-3 text-center mb-lg-0">
                        <li className="nav-item me-5 shadow rounded bg-info">
                            <Link className="nav-link text-light active fw-bold" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item me-5 shadow rounded bg-info">
                            <Link className="nav-link text-light fw-bold active" to="#/">Dental services</Link>
                        </li>
                        <li className="nav-item me-5 shadow rounded bg-info">
                            <Link className="nav-link text-light fw-bold active" to="/dashboard">Dashboard</Link>
                        </li>
                        {
                            isDoctor && <li className="nav-item me-5 bg-info shadow rounded bg-info">
                                <Link className="nav-link text-light fw-bold" to="/dashboard">Admin</Link>
                            </li>
                        }

                        <li className="nav-item me-5 shadow rounded bg-info">
                            <Link className="nav-link text-light fw-bold" to="#/">Blog</Link>
                        </li>
                        <li className="nav-item me-5 shadow rounded bg-info text-light">
                            <Link className="nav-link text-light fw-bold" to="#/">Contact Us</Link>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;