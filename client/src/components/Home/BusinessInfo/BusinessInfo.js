import React from 'react';
import InfoCart from '../InfoCart/InfoCart';
import { faClock, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const infoData = [
    {
        title: 'Opening Hours',
        description: 'We are open 24*7',
        icon: faClock,
        backgroundColor: '#12D0D9'
    },
    {
        title: 'Visit our location',
        description: 'bookly, USA',
        icon: faMapMarkerAlt,
        backgroundColor: '#3A4256'
    },
    {
        title: 'Contact Us now',
        description: '7418529630',
        icon: faPhoneAlt,
        backgroundColor: '#12D0D9'
    }
]

const BusinessInfo = () => {
    return (
        <section className=" container">
            <div className="row py-5">
                {
                    infoData.map(info => <InfoCart info={info} />)
                }
            </div>

        </section>
    );
};

export default BusinessInfo;