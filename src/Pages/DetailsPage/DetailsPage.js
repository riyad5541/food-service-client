import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const allDetails = useLoaderData();
    const {title, img, price, description} = allDetails
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto my-12">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <p className='text-2xl text-red-800'>Price: {price} tk</p>
                    
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;