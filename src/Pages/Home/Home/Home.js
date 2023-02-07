import React from 'react';
import Banner from './Banner/Banner';
import Courses from './Courses/Courses';
import SeeCourses from './SeeCourses/SeeCourses';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Courses></Courses>
            <SeeCourses></SeeCourses>
        </div>
    );
};

export default Home;