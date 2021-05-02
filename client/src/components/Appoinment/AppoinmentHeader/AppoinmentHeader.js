import React from 'react';
import chairImg from '../../images/chair.png'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppoinmentHeader = ({handleDateChange}) => { 

    return (
        <main style={{ height: '700px' }} className="row d-flex align-items-center">
            <div className="col-md-4 offset-md-1  ">
                <h1 style={{ color: '#3A4256' }}>Appoinment</h1>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-6">
                <img src={chairImg} className="img-fluid p-3" alt="..." />
            </div>
        </main>
    );
};

export default AppoinmentHeader;