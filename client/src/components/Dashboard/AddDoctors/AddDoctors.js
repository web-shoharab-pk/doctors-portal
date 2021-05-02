import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddDoctors.css'

const AddDoctors = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null); 
 
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
        
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0]
        setFile(newFile) 
    }
    const handleSubmit = () => {
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)
        formData.append('phone', info.phone) 
        
        fetch('https://safe-chamber-24874.herokuapp.com/addADoctor', {
            method: 'POST', 
            body: formData
        })
            .then(response => response.json())
            .then(data => { 
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <section className="container-fluid row">
            <div className="col-md-2">
                <Sidebar></Sidebar>
            </div>
            <div style={{ backgroundColor: "#F4FDFB" }} className="col-md-10">
                <div>
                    <h1 style={{ color: '#19D3B0' }}>Add Doctor</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email address</label>
                        <input onBlur={handleBlur} type="email" className="form-control" name="email" placeholder="Enter email" required/>

                    </div><br />
                    <div className="form-group">
                        <label>Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" required/>
                    </div><br />
                    <div className="form-group">
                        <label>Contact No.</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="phone" placeholder="Contact No..." required/>
                    </div><br />
                    <div className="form-group">
                        <label>Upload your image</label>
                        <input onChange={handleFileChange} type="file" className="form-control" />

                    </div> <br />
                    <div className="text-center">
                        <button type="submit" className="booking-btn w-25">Submit</button>
                    </div>

                </form>
            </div>
        </section>
    );
};

export default AddDoctors;