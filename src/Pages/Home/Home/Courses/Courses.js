import React, { useEffect, useState } from 'react';
import CoursesCard from './CoursesCard';

const Courses = () => {
    const [courses,setCourses]=useState([]);
    useEffect(()=>{
        fetch('https://edu-courses-server.vercel.app/courses')
        .then(res=>res.json())
        .then(data=> setCourses(data))
    },[])
    return (
        <div className='m-10'>
            <div className='text-center'>
                <p className='text-2xl font-bold text-success'>Courses</p>
                <h2 className='text-3xl font-semibold text-dark'>Our All Courses</h2>
                <hr />
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 m-10'>
              
                {
                   courses.map(course=><CoursesCard
                   key={course._id}
                   course={course}
                   >
                   </CoursesCard>)
                }
            </div>
        </div>
    );
};

export default Courses;