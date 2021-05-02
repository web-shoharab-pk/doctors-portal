import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AllPatients = () => {
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
            <div style={{backgroundColor: "#F4FDFB"}} className="col-md-10">
                <h2 className="mt-5">Patients</h2>
                <div style={{backgroundColor:  'white'}} className="p-5 shadow mt-5">
                    <h2 style={{color:  '#19D3B0' }}>All Patient</h2>
                    <table className="table table-borderless p-5">
                        <thead>
                            <tr className=" text-secondary fs-5">
                                <th scope="col">Id.No</th>
                                <th scope="col">Name</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                                <th scope="col">Weight</th>
                                <th scope="col">Contact</th>
                                <th scope="col">Email/Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map(patient =>
                                    <tr key={patient._id}>
                                        <th>{patient._id}</th>
                                        <th>{patient.name}</th>
                                        <th>{patient.gender}</th>
                                        <th>{patient.age}</th>
                                        <th>{patient.weight}</th>
                                        <th>{patient.phone}</th>
                                        <th>{patient.email}</th>
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

export default AllPatients;