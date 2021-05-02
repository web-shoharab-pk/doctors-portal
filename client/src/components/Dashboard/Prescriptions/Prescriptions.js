import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Prescriptions = () => {
    const [patients, setPatients] = useState([])
 
    useEffect(() => {
        fetch('https://safe-chamber-24874.herokuapp.com/allpatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])
    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{ backgroundColor: "#F4FDFB" }} className="col-md-10">
                <h2 className="mt-5">Prescriptions</h2>
                <div style={{ backgroundColor: 'white' }} className="p-5 shadow mt-5">
                    <h2 style={{ color: '#19D3B0' }}>All Prescriptions</h2>
                    <table className="table table-borderless p-5">
                        <thead>
                            <tr className=" text-secondary fs-5">
                                <th scope="col">Id.No</th>
                                <th scope="col">Date</th>  
                                <th scope="col">Name</th>  
                                <th scope="col">Contact</th>
                                <th scope="col">Prescription</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map(patient =>
                                    <tr key={patient._id}>
                                        
                                        <th>{patient._id}</th>
                                        <th>{(patient.date)}</th>  
                                        <th>{patient.name}</th>  
                                        <th>{patient.phone}</th>
                                        <th><button className="booking-btn w-75 p-1">View</button> </th>
                                    </tr>

                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Prescriptions;