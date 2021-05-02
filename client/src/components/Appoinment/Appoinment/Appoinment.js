import React, { useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navbar from '../../Shared/Navbar/Navbar';
import AppoinmentHeader from '../AppoinmentHeader/AppoinmentHeader';
import BookAppoinment from '../BookAppoinment/BookAppoinment';
import './Appoinment.css'

const Appoinment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
  
    const handleDateChange = date => {
        setSelectedDate(date);
    }
    return (
        <main>
            <section className="appoinmentHeader">
                <Navbar></Navbar>
                <AppoinmentHeader handleDateChange={handleDateChange}></AppoinmentHeader>
            </section>
            <BookAppoinment date={selectedDate}></BookAppoinment>
            <Footer></Footer>
        </main>
    );
};

export default Appoinment;