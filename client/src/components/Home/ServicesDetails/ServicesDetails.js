import React from 'react';

const ServicesDetails = ({ services }) => {
    return (
        <div>
             
                <div className="px-3 py-5  text-center">
                    <img src={services.image} alt="" />
                    <h3 className="mt-1">{services.title}</h3>
                    <p className="text-secondary mt-3">{services.description}</p>
                </div>

            </div> 
    );
};

export default ServicesDetails;