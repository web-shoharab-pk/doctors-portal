import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import 'react-calendar/dist/Calendar.css';
import { UserContaxt } from '../../../App';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Dashboard = () => {
    const { isDoctor } = useContext(UserContaxt);

    const [patients, setPatients] = useState([])
    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://safe-chamber-24874.herokuapp.com/allpatients')
            .then(res => res.json())
            .then(data => setPatients(data))
    }, [])

    useEffect(() => {
        fetch('https://safe-chamber-24874.herokuapp.com/allDoctor')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <main>
            <section style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                {
                    isDoctor &&
                    <div style={{ borderRight: '5px solid gray' }} className="col-md-5 mt-5 text-center">
                        <div className="patientsCount">
                            <h1 style={{ color: '#19D3B0' }}>Total Patient: {patients.length}</h1>
                            <div>
                                <table className="table">
                                    <thead className="text-secondary">
                                        <tr>
                                            <th scope="col">Id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            patients.map(patient =>
                                                <tr>
                                                    <th scope="row">{patient._id}</th>
                                                    <th>{patient.name}</th>
                                                    <th>{patient.phone}</th>
                                                </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                }



                <div className="col-md-5 mt-5 text-center">
                    <div className="doctorCount">
                        <h1 style={{ color: '#19D3B0' }}>Total Doctor: {doctors.length}</h1>
                    </div>
                    <div>
                        <table className="table">
                            <thead className="text-secondary">
                                <tr>
                                    <th scope="col">Id</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Phone</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    doctors.map(doctor =>
                                        <tr>
                                            <th scope="row">{doctor._id}</th>
                                            <th>{doctor.name}</th>
                                            <th>{doctor.phone}</th>
                                        </tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                </div>




            </section>
        </main>
    );
};

export default Dashboard;