import React from 'react';
import image1 from '../../images/image1.png';
import image2 from '../../images/image2.png';
import image3 from '../../images/image3.png';
import quote from '../../images/quote.png';
import TestimonialCard from './TestimonialCard';
 
const TestimonialData = [
    {
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae sed quis, quibusdam nemo error nulla molestiae dignissimos fuga? Consequatur incidunt corporis officia minus unde quisquam consectetur suscipit fugit facilis.',
        name: 'Watson Herry',
        location: 'california',
        image: image1
    },
    {
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae sed quis, quibusdam nemo error nulla molestiae dignissimos fuga? Consequatur incidunt corporis officia minus unde quisquam consectetur suscipit fugit facilis.',
        name: 'Nehi Pata',
        location: 'california',
        image: image2
    },
    {
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vitae sed quis, quibusdam nemo error nulla molestiae dignissimos fuga? Consequatur incidunt corporis officia minus unde quisquam consectetur suscipit fugit facilis.',
        name: 'Nehi Janta',
        location: 'california',
        image: image3
    }
]

const Testimonial = () => {
    return (
        <section className=" container my-5">
            <div style={{marginTop: '100px' }} className="d-flex p-3  justify-content-between">
                <div>
                    <h2 style={{color: '#14D1CE'}}>TESTIMONIAL</h2>
                    <h1>WHat's Our Patients Says</h1>
                </div> 
                <div>
                    <img className="w-50" src={quote} alt="" />
                </div> 
            </div>
            <div className="row py-1 px-3">
                {
                  TestimonialData.map(info => <TestimonialCard info={info} />)  
                }
            </div>
            
        </section>
    );
};

export default Testimonial;