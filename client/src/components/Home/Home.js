import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Appoinment from './Appoinment/Appoinment';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import ExceptionalDental from './ExceptionalDental/ExceptionalDental'; 
import Header from './Header/Header';
import OurDoctors from './OurDoctors/OurDoctors';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <ExceptionalDental></ExceptionalDental>
            <Appoinment></Appoinment> 
            <Testimonial></Testimonial>
            <Blog></Blog> 
            <OurDoctors></OurDoctors> 
            <Contact></Contact> 
            <Footer></Footer>
        </div>
    );
};

export default Home;