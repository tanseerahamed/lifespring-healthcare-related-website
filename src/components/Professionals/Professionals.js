import React, { useEffect, useState } from 'react';
import Professional from '../Professional/Professional';
import './Professionals.css';


const Professionals = () => {
    const [professionals, setProfessionals] = useState([]);

    useEffect ( ()=> {
        fetch('./teachers.json')
        .then(res => res.json())
        .then(data => setProfessionals(data));
    },[])
    return (
        <div className='teacher-container'>
                {
                    professionals.map(professional => <Professional key={professional.key}  
                        professional = {professional}></Professional>)
                }
        </div>
    );
};

export default Professionals;