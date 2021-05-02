import React from 'react';
import flouride from '../../images/001-dental.png';
import cavity from '../../images/tooth1.png';
import whitening from '../../images/tooth.png'
import ServicesDetails from '../ServicesDetails/ServicesDetails';

const servicesData =  [
    {
        title: 'Flouride Treatment',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio enim vero veritatis accusamus beatae incidunt,',
        image: flouride
    },
    {
        title: 'Cavity Filling',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio enim vero veritatis accusamus beatae incidunt,',
        image: cavity
    },
    {
        title: 'Teeth Whitening',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis optio enim vero veritatis accusamus beatae incidunt,',
        image: whitening
    }
]

const Services = () => {

    return (
        <section className="services-container container mt-5">
            <div className="text-center">
                <h4 style={{color: '#0FCFEA'}}>OUR SERVICES</h4>
                <h1 style={{color: '#3A4256'}}>Services We Provide</h1>
            </div>
            <div className="d-flex  justify-content-between mt-5">
                {
                    servicesData.map(services => <ServicesDetails services={services} />)
                }
            </div>
        </section>
    );
};

export default Services;