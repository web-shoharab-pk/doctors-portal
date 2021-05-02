import React from 'react';
import { Link } from 'react-router-dom';
import chairImg from '../../images/chair.png';


const HeaderMain = () => {
    return (
        <main style={{height: '700px'}} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1 p-3">
                <h1 style={{color: '#3A4256'}}>Your New Smile <br /> Start Here</h1>
                <p className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, officiis? Lorem ipsum dolor sit amet.</p>
             <Link to="/appoinment"><button style={{backgroundColor: '#12D0D9'}} className="btn text-light fw-bold">GET APPOINMENT</button></Link>   
            </div>  
            <div className="col-md-6">
            <img src={chairImg} className="img-fluid p-3" alt="..." />
            </div>   
        </main>
    );
};

export default HeaderMain;