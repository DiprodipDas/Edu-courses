import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const {title,img,description,teacher,price}=useLoaderData();
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <img alt='' src={img} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6">{description}</p>
      <p className='font-bold'>Teacher:{teacher}</p>
      <p className='text-success font-bold'>Price: {price}BDT</p>
      <button className="btn btn-success ml-60">Enroll Now</button>
    </div>
  </div>
</div>
    );
};

export default Details;