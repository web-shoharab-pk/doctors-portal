import React from 'react';
import './Blog.css';
import image1 from '../../images/aliza.png';
import image2 from '../../images/wilson.png'
import BlogCard from './BlogCard';

const blogAuther = [
    {
        image: image1,
        name: 'Dr. Sabrina',
        date: (new Date()).toDateString(),
        title: 'dummy text Lorem ipsum dolor sit.',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium aut nostrum quod modi illum quo beatae, nulla placeat facere.'
    },
    {
        image: image2,
        name: 'Dr. Shayed',
        date: (new Date()).toDateString(),
        title: 'dummy text Lorem ipsum dolor sit.',
        description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium aut nostrum quod modi illum quo beatae, nulla placeat facere.'
    } 
]

const Blog = () => {
    return (
        <section className=" container my-5">
            <div className="text-center mt-5">
                <h3 className="text-info">OUR BLOG</h3>
                <h1>From Our Blog News</h1>
            </div>
            <div className="d-flex mt-5">
                <div className=" ">
                    <div style={{  width: '400px' }} className="card1 p-5 mx-3 rounded">
                        <h6>Rashed kabir</h6>
                        <p>{(new Date()).toDateString()}</p>
                        <h3 className="mt-5 text-light">
                            Check at least doctor in <br /> a  year for your teeth
                        </h3>
                        <button className="btn btn-info text-light fw-bold px-5 mt-5" >GO...</button>
                    </div>
                </div>
                <div className="row">
                        {
                                blogAuther.map(info =>  <BlogCard info={info} />)
                        }
                </div>

            </div>

        </section>
    );
};

export default Blog;