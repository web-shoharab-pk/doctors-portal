import React, { useEffect, useState } from 'react'; 
import Doctors from './Doctors'; 
 

const OurDoctors = () => {
    const [doctors, setDoctors] = useState([])

    useEffect(() => {
        fetch('https://safe-chamber-24874.herokuapp.com/allDoctor')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className=" container my-5">
            <h2 className="text-center text-info">OUR DOCTORS</h2> 
            <div className="row">
                {
                    doctors.map(info => <Doctors key={info._id} info={info} />)
                }
            </div> 
            
        </section>
    );
};

export default OurDoctors;