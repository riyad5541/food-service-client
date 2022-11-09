import React from 'react';

const ServiceCard = ({service}) => {
    const {img, title, price, description} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className='h-52' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description.slice(0,50)+". . ."}</p>
                <div className="card-actions justify-end">
                    <p className='text-2xl text-orange-800'>Price: {price} tk</p>
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;