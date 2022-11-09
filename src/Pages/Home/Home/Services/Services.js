import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <>
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
            <div className='flex justify-center my-12'>
                <Link to="/allservices"><button className="btn btn-outline btn-success">See All</button></Link>
            </div>
        </>
    );
};

export default Services;