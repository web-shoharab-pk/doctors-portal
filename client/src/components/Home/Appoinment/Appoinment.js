import React from 'react';
import './Appoinment.css';
import drImage from '../../images/dr-image-rv-bg.png'

const Appoinment = () => {
    return (
        <section className="appoinment-container container ">
            <div className="row ">
                <div className="col-md-5">
                    <div className="appoinmentDoctor ">
                        <img className="w-100" src={drImage} alt="" />
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="d-flex align-items-center justify-content-center mx-5 p-5">
                        <div>
                            <h4 className="text-info">APPOINMENT</h4>
                            <h1>Make Appoinment Today</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, repellat? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, repellat?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, repellat?</p> 
                            <button className="btn btn-info text-light fw-bold mt-3">Learn more</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Appoinment;