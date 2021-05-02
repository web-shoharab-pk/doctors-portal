import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { UserContaxt } from '../../../App';
import AppoinmentsByDate from '../AppoinmentsByDate/AppoinmentsByDate';
import Sidebar from '../Sidebar/Sidebar';
const containerStyle = {
    backgroundColor: "#F4FDFB",
    height: "100%"
}

const Appoinments = () => {
    const { userInfo } = useContext(UserContaxt)
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [appoinments, setAppoinments] = useState([])
    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://safe-chamber-24874.herokuapp.com/appoinmentByDate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ selectedDate, email: userInfo.email })
        })
            .then(res => res.json())
            .then(data => {
                setAppoinments(data);
            })
    }, [selectedDate, userInfo.email])
    return (
        <main>
            <section style={containerStyle} className="container-fluid row">
                <div className="col-md-2">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-5 d-flex justify-content-center mt-5">
                    <div className="shadow p-5">
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>

                </div>
                <div className="col-md-5">
                    <AppoinmentsByDate appoinments={appoinments}></AppoinmentsByDate>

                </div>
            </section>
        </main>
    );
};

export default Appoinments;