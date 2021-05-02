import React, { useContext } from 'react';
import './Login.css';
import image from '../images/loginbg.png';
import googlelogo from '../images/google.png'
import { useForm } from "react-hook-form";
import "firebase/auth";
import firebase from "firebase/app";
import { firebaseConfig } from './firebase.config';
import { UserContaxt } from '../../App';
import { useHistory, useLocation } from 'react-router';

// Add the Firebase services that you want to use


// Add the Firebase products that you want to use
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}


const Login = () => {
    const {  setUserInfo} = useContext(UserContaxt)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    let history = useHistory();
    let location = useLocation();
    
  
    let { from } = location.state || { from: { pathname: "/" } };

    const googleLogin = () => { 

        var provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                /** @type {firebase.auth.OAuthCredential} */
                var credential = result.credential;

                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = credential.accessToken;
              sessionStorage.setItem('token', token)
                // The signed-in user info.
                var user = result.user;
                
                setUserInfo(user)
                history.replace(from);
                // ...
            }).catch((error) => { 
                var errorMessage = error.message; 
                console.log("error:", error, "errorMessage", errorMessage)
                // ...
            });
    }



    return (
        <main className=" container">
            <section className="row">
                <div className="col-md-6 p-5">
                    <div className="p-5 shadow">
                        <h1 className="text-secondary fw-bolder text-center">Login</h1>
                        <form className="input-group mt-5" onSubmit={handleSubmit(onSubmit)}>
                            <p className="text-secondary fw-bolder m-0">User Email</p>
                            <div className="input-group mb-3">
                                <input {...register("email")} type="email" className="form-control input-field" placeholder="Email" />
                            </div>
                            <p className="text-secondary fw-bolder m-0">Password</p>
                            <div className="input-group ">
                                <input {...register("password", { required: true })} type="password" className="form-control input-field" placeholder="Password" /> <br />
                                {errors.password && <span className="text-danger">This field is required</span>}
                            </div>
                            <input className="booking-btn mt-3 w-100" type="submit" />
                        </form>
                        <div className="my-5">
                            <div onClick={googleLogin} className="d-flex justify-content-evenly align-items-center py-1 googleLogin">
                                <img src={googlelogo} alt="" />
                                <h3>Login with Google</h3>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <img className=" img-fluid" src={image} alt="" />
                </div>
            </section>
        </main>
    );
};

export default Login;