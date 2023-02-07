import React from 'react';
import stuImg from '../../../../assets/eduperson.png'
import backround from '../../../../assets/backround.png'
import bg from '../../../../assets/bg6.jpg'
import { Link } from 'react-router-dom';

const SeeCourses = () => {
    return (
       <section className='mt-24' 
       style={{
        background:`url(${bg})`
       }}>
         <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={stuImg} className="-mt-32 lg:w-1/2 rounded-lg " />
                <div>
                    <h4 className='text-lg text-primary font-bold'>Explore Our All Courses</h4>
                    <h1 className="text-4xl text-dark font-bold">Choose your favorite course today!</h1>
                    <p className="py-6 text-dark">In Edu course mart you fine 100+ course for improving your skill in different fields.So,grab your chance from here today. </p>
                    <Link to='/courses'><button className="btn btn-primary">All Courses</button></Link>
                </div>
            </div>
        </div>
       </section>
    );
};

export default SeeCourses;