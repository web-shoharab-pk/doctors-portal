import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle, faTwitter  } from '@fortawesome/free-brands-svg-icons';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className=" footer container py-5 px-3 mt-5">
            <div className=" d-flex justify-content-between">
                <h1 className="text-info">Services</h1><h1 className="text-info">Oral Health</h1>   <h1 className="text-info">OUR ADDRESS</h1></div>
            <div className="row d-flex justify-content-between">
                <div className="col-md-3 ">
                    <Link className="link" to="/">Emergency Dental Care</Link> <br />
                    <Link className="link" to="/">Tooth Extraction</Link> <br />
                    <Link className="link" to="/">Check Up</Link><br />
                    <Link className="link" to="/">Treathment with personal diaseae </Link>
                </div>
                <div className="col-md-3">

                    <div>

                        <Link className="link" to="/">Emergency Dental Care</Link> <br />
                        <Link className="link" to="/">Tooth Extraction</Link><br />
                        <Link className="link" to="/">Check Up</Link><br />
                        <Link className="link" to="/">Treathment with personal diaseae </Link>
                    </div>
                </div>
                <div className="col-md-3">

                    <div>
                        <Link className="link" to="/">Emergency Dental Care</Link> <br />
                        <Link className="link" to="/">Tooth Extraction</Link><br />
                        <Link className="link" to="/">Check Up</Link><br />
                        <Link className="link" to="/">Treathment with personal diaseae </Link>
                    </div>
                </div>
                <div className="col-md-3">
                    <div>
                        <h4 className="text-secondary">New york USA - 101010</h4>
                        <div className="fs-1">
                            <FontAwesomeIcon className="icon bg-info text-light m-3" icon={faFacebook} />
                            <FontAwesomeIcon className="icon social-icon1 m-3" icon={faGoogle} />
                            <FontAwesomeIcon className="icon social-icon1 m-3" icon={faTwitter} />
                        </div>

                        <h6 className="text-secondary">Call Now</h6>
                        <button className="w-50 text-light fw-bold p-1 submitBtn"><FontAwesomeIcon icon={faPhoneAlt} /> +1258963741</button>
                    </div>
                </div>
            </div>
            <p className="text-center mt-3 text-secondary">Copyrights {new Date().getFullYear()} all rights reserve by web-shoharab-pk</p>
        </footer>
    );
};

export default Footer;