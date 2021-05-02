import React from 'react';
import ExceptionalDentalImage from '../../images/exceptionaldental.png'


const ExceptionalDental = () => {
    return (
        <section className=" container">
            <div className="row">
                <div className="col-md-6">
                    <div className="py-3 px-1 w-75 text-center">
                        <img className="w-100 img-fluid" src={ExceptionalDentalImage}  alt="..." />
                    </div>

                </div>
                <div className="col-md-6 d-flex align-items-center">
                    <div  className="p-1">
                        <h1>
                            Exceptional Dental Care <br /> On Your Team
                        </h1>
                        <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla quis non, rerum totam eaque, autem possimus, et accusantium optio facere harum corporis dignissimos! Voluptatem iusto culpa laboriosam deleniti laborum. Facere quos ex modi vel obcaecati labore laboriosam veritatis minima!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta nulla quis non, rerum totam eaque, autem possimus, et accusantium optio facere harum corporis dignissimos! Voluptatem iusto culpa laboriosam deleniti laborum. Facere quos ex modi vel obcaecati labore laboriosam veritatis minima!
                        </p>
                        <button style={{backgroundColor: '#0FCFEA'}} className="btn text-light fw-bold">Learn more</button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default ExceptionalDental;