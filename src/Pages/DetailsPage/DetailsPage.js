import React from 'react';
import { useLoaderData } from 'react-router-dom';

const DetailsPage = () => {
    const allDetails = useLoaderData();
    const {title, img, price, description,_id} = allDetails

    const handleAddReview = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const ImageURL = form.ImageURL.value;
        const review = form.review.value;

        const order ={
            service:_id,
            name,
            ImageURL,
            review
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST' ,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                alert('Review Add Sucessfully')
                form.reset();
            }
        
        })
        .catch(er => console.error(er));
    }
    return (
       <>
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
        <div>
        <h1 className='text-5xl text-center my-12 text-orange-800' >Review Section</h1>
            <form onSubmit={handleAddReview}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12'>
                    <input name='name' type="text" placeholder="Your name" className="input input-bordered w-full" required/>
                    <input name='ImageURL' type="text" placeholder="ImageURL" className="input input-bordered w-full" required />
                    <textarea name='review' className="textarea textarea-success w-full" placeholder="Give Review" required></textarea>
                </div>
                <input className='btn mb-12' type='submit' value='Add Review' />

            </form>
        </div>
       </>
    );
};

export default DetailsPage;