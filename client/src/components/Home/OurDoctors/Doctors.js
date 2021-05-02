import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPhoneAlt} />

const Doctors = ({info}) => {
 
    return (
        <div className="col-md-4 text-center mt-5">
            <div>
                {
                 info.image ?  <img style={{width: '250px', borderRadius: '50%', height: '250px'}} src={`data:image/png;base64,${info.image.img}`} alt=""/> 
                 :
                  <img style={{width: '250px', borderRadius: '50%', height: '250px'}} src={`https://safe-chamber-24874.herokuapp.com/${info.image}`} alt="" /> 
                }
                <br />
                <h3 className="mt-3">{info.name}</h3>
                <p className="mt-3"> <span className="text-info" > {element}</span>  {info.phone}</p> 
            </div>
        </div>
    );
};

export default Doctors;