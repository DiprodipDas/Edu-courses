import React from 'react';
import bannerImg from '../../../../assets/Banner.jpg'

const Banner = () => {
    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img alt='' src={bannerImg} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">Best course are waiting for you!</h1>
            <p className="py-6">Edu course mart is a educational courses provider.You find all kinds of technical & non-technical courses here.So,Why are you waiting for? </p>
            <button className="btn btn-success">Explore More About Us</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;