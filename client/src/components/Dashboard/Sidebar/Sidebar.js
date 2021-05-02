import React, { useContext, useEffect } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faCaretSquareRight, faCalendarCheck, faHospitalUser, faFilePrescription, faSignOutAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { UserContaxt } from '../../../App';
import "firebase/auth";
import firebase from "firebase/app";

const Sidebar = () => {
    const { userInfo, setUserInfo } = useContext(UserContaxt);
    const { isDoctor, setIsDoctor } = useContext(UserContaxt); 
    const { displayName, photoURL, email } = userInfo;

    const handleLogOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            setUserInfo("")
            sessionStorage.removeItem('token')
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        fetch('https://safe-chamber-24874.herokuapp.com/isDoctor', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: userInfo.email })
        })
            .then(res => res.json())
            .then(data => setIsDoctor(data))
    }, [userInfo.email, setIsDoctor])
    return (
        <div className="sidebar py-5">

            {
                displayName && <div className="px-5 text-center mb-3 option">
                    <Link className="option" to="/dashboard">  <img style={{width: '80px', borderRadius: '50%'}}src={photoURL} alt="" />   </Link>
                </div>
            }

            {
                displayName && <div className="px-5 mb-5 option">
                    <Link className="option" to="/dashboard">  <span title={email}>{displayName}</span> </Link>
                </div>
            }

            <div className="px-5 mb-5 option">
                <Link className="option" to="/dashboard">   <FontAwesomeIcon icon={faCaretSquareRight} /> <span>Dashboard</span> </Link>
            </div>
            <div className="px-5 mb-5 option">
                <Link className="option" to="/dashboard/appoinments">  <FontAwesomeIcon icon={faCalendarCheck} /> <span>Appoinment</span></Link>
            </div>
            {
                isDoctor &&
                <div>
                    <div className="px-5 mb-5 option">
                        <Link className="option" to="/dashboard/patients">  <FontAwesomeIcon icon={faHospitalUser} />  <span>Patients</span> </Link>
                    </div>
                    <div className="px-5 mb-5 option">
                        <Link className="option" to="/dashboard/prescriptions"><FontAwesomeIcon icon={faFilePrescription} /> <span>Prescriptions</span></Link>
                    </div>
                    <div className="px-5 mb-5 option">
                        <Link className="option" to="/addDoctor">  <FontAwesomeIcon icon={faUserPlus} /> <span>Add Doctors</span> </Link>
                    </div>
                    <div className="px-5 mb-5 option">
                        <Link className="option" to="/dashboard">  <FontAwesomeIcon icon={faCog} /> <span>Setting</span> </Link>
                    </div>
                </div>
            }

            <div className=" logout option">
                <Link className="option" onClick={handleLogOut} to="/login">  <FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span> </Link>
            </div>
        </div>
    );
};

export default Sidebar;