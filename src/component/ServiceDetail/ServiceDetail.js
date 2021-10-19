import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ServiceCart from './ServiceCart';

const ServiceDetail = () => {
    const {serviceId} = useParams();
    const [serviceDetails, setServiceDetail] = useState([]);
    useEffect(() => {
        fetch("/fakedata.json")
        .then(res => res.json())
        .then(data => setServiceDetail(data));
    },[])
    
     const services = serviceDetails.filter(service => serviceId == service.id)
     console.log(services);   
    
    
    return (
        <div>
            {
                services.map(service => <ServiceCart service={service}></ServiceCart>)
            }
        </div>
    );
};

export default ServiceDetail;