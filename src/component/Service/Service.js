import React, { useEffect, useState } from 'react';
import "./Service.css";

import Cart from '../../Cart/Cart';

const Service = () => {
    const [services,setService]=useState([]);

    useEffect(() =>{
        fetch("/fakedata.json")
        .then(res => res.json())
        .then(data => setService(data));
    },[]);
    return (
        <div className="service-container">
            <h1>this is service</h1>
            <div className="service">
            {
                services.map(service => <Cart key={service.id} service={service}></Cart>)
            }
            </div>
            
        </div>
    );
};

export default Service;