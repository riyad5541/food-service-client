import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] =useState ([]);
    useEffect(() =>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data));
    },[])
    return (
        <div>
            <div className='text-center mb-6'>
                <p className='text-2xl font-bold '>services</p>
                <h2 className='text-5xl font-semibold'>Our Services Area</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    services.map(service => <ServiceCard 
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;