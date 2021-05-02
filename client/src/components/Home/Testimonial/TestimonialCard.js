import React from 'react';
import './TestimonialCard.css'

const TestimonialCard = ({info}) => { 
    
    return (
        <div className="col-md-4 mt-3">
            <div className="p-3  text-center card">
                <p>{info.description}</p>
                <div className="d-flex justify-content-evenly mt-5">
                <img style={{width: '80px'}} src={info.image} alt="" />
                    <div>
                        <h3 className="text-info">{info.name}</h3>
                        <h4>{info.location}</h4>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default TestimonialCard;