import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#root')

const AppoinmentForm = ({ closeModal, modalIsOpen, title, date }) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.service = title;
        data.date = date;  
        fetch('https://safe-chamber-24874.herokuapp.com/addAppoinment', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(success => {
                if (success) {
                    closeModal()
                    alert("your appoinment booking is succesful! you are welcome")
                }
            })

    };

    return (
        <div>
            <div>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 className="text-center" style={{ color: '#71EFDE' }}>{title}</h2>
                    <p className="text-seondary text-center">ON {date.toDateString()}</p>
                    <br /> <br />
                    <form className=" text-left" onSubmit={handleSubmit(onSubmit)}>
                        {/* register your input into the hook by invoking the "register" function */}

                        <input className="form-control" type="text" {...register("name")} placeholder="Your Name" required /> <br />

                        <input className="form-control" type="number"  {...register("phone")} placeholder="Your Phone Number" required /> <br />
                        <input className="form-control" type="email" {...register("email")} placeholder="Your Email" required /> <br />
                        {/* <input className="form-control" type="date"  {...register("date")} placeholder="dd/mm/yyyy" required />  <br /> */}
                        <div className="input-group">
                            <select className="form-control  w-30" {...register("gender")} placeholder="selected date" required >
                                <option value="female">female</option>
                                <option value="male">male</option>
                                <option value="other">other</option>
                            </select>
                            <input className="form-control mx-3" type="number"  {...register("age")} placeholder="Your Age" required />
                            <input className="form-control " type="number" {...register("weight")} placeholder="Your Weight/KG" required />
                        </div> <br />

                        <input className="booking-btn w-100  " type="submit" value="SEND" />


                    </form>
                </Modal>
            </div>
        </div>
    );
};

export default AppoinmentForm;