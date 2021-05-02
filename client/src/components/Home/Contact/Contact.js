import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <main className="contact-container">
            <div className="text-center py-5  d-flex justify-content-center">
                <div>
                <h2 className="text-info mt-5">CONTACT US</h2>
                <h1 className="text-light mt-3 mb-5">Always Connect With Us</h1>
                <div className="form-floating mx-auto my-3">
                    <input type="email" className="form-control  " id="floatingInput" placeholder="name@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="type" className="form-control " id="floatingPassword" placeholder="subject" />
                    <label>Subject</label>
                </div>
                <br />
                <div className="form-floating">
                    <textarea className="form-control " placeholder="Your Message" id="floatingTextarea2" style={{ height: '200px' }}></textarea>
                    <label>Your Message</label>
                </div> 
                <br />
                <button className="w-50 p-1 text-light fw-bold submitBtn">SUBMIT</button> 
            </div>
            </div> 
        </main>
    );
};

export default Contact;