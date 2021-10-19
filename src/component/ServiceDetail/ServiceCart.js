import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./ServiceCart.css";

const ServiceCart = ({service}) => {
    const {name,img,description,appointments,SpecialInterests} = service;
    return (
        <div className="service-detail">
            <img src={img} />
            <h1>{name}</h1>
            <p>{description}</p>
            <h3>SpecialInterests:{SpecialInterests}</h3>
            <h4>appointment:{appointments}</h4>
            <Link to="/appointment"><Button>appointment here</Button></Link>
        </div>
    );
};

export default ServiceCart;