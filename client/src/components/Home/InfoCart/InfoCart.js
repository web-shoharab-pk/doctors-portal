import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCart = ({ info }) => {
    return (
        <div className="col-md-4">
            <div style={{ backgroundColor: info.backgroundColor, color: 'white' }} className="d-flex justify-content-evenly align-items-center rounded px-5 py-3 mt-3">
                <div style={{fontSize: '50px'}}>
                    <FontAwesomeIcon icon={info.icon}></FontAwesomeIcon> 
                </div>
                <div>
                    <h4>{info.title}</h4>
                    <small>{info.description }</small>
                </div>

            </div>
        </div>
    );
};

export default InfoCart;