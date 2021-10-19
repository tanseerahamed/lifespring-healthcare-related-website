import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = (props) => {
    const {id,name, price, description, img} = props.service;
    return (
        <div className="single-member">
            <img src={img} alt="" fluid />
            <h4>{name}</h4>
            <p>Fee: {price}</p>
            <p>{description}</p>
            <Link to={`/servicedetails/${id}`}>
            <button className="btn btn-warning mb-2">Get Your Service: {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;