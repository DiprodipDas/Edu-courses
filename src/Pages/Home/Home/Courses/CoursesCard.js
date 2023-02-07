import React from 'react';
import { Link } from 'react-router-dom';

const CoursesCard = ({course}) => {
    const {_id,img,price,title,description}= course;
    return (
        <div className="card card-compact w-50 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                   <Link to={`/details/${_id}`}>
                   <button className="btn btn-success">See Details</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default CoursesCard;