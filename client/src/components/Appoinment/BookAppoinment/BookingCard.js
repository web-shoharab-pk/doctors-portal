import React from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';
import './style.css'

const BookingCard = ({ data, date }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    function openModal() {
        setIsOpen(true);
    }
 

    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className="col-md-4">
            <div className="card mb-5">
                <div className="card-body text-center">
                    <h2 style={{ color: '#71EFDE' }}>{data.subject}</h2>
                    <h4>{data.visitingHour}</h4>
                    <h6 className="text-secondary mb-3">{data.totalSpace} Space Available</h6>
                    <button onClick={openModal} className="booking-btn my-3">BOOK APPOINMENT</button>
                    <AppoinmentForm closeModal={closeModal} title={data.subject} date={date} modalIsOpen={modalIsOpen}></AppoinmentForm>
                </div>

            </div>
        </div>
    );
};

export default BookingCard;