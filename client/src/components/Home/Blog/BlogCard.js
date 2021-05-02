import React from 'react';

const BlogCard = ({info}) => {
    return (
        <div  style={{  width: '400px'}} className="col-md-6 mx-3 text-center card py-5">
            <div className="d-flex justify-content-between p-1">
                <img style={{width: '60px'}}  src={info.image} alt="" />
                <div>
                    <h5 className="">{info.name}</h5>
                    <h5>{info.date}</h5>
                </div>
            </div>
            <div className="p-3">
            <h6 className="mt-3">{info.title}</h6> 
            <p className="mt-3 text-secondary">{info.description}</p>   
            </div> 
        </div>
    );
};

export default BlogCard;