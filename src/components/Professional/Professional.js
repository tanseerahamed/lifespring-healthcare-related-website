import React from 'react';
import './Professional.css';

const Professional = (props) => {
    const {name, designation, experience, Age, image} = props.professional;
    return (
        <div>
            <div className="single-member">
                <img src={image} alt="" />
                <h4>Name: {name}</h4>
                <p>Designation: {designation}</p>
                <p>Age: {Age}</p>
                <p>Experience: {experience}</p>
            </div>
        </div>
    );
};

export default Professional;