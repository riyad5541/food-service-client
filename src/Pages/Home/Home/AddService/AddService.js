import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';

const AddService = () => {

    const [addServices, setaddServices] = useState({})

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const img = form.img.value;
        const description = form.description.value;

        const service = {
            title,
            price,
            img,
            description
        }
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Service Add Sucessfully')
                    form.reset();
                }
                

            })
            .catch(er => console.error(er));
    }





    return (
        <div>
            {data.title}
            <form onSubmit={handleAddService}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-12'>
                    <input name='title' type="text" placeholder="Title" className="input input-bordered w-full" required />
                    <input name='price' type="text" placeholder="Price" className="input input-bordered w-full" required />
                    <input name='img' type="text" placeholder="ImageURL" className="input input-bordered w-full" required />
                    <textarea name='description' className="textarea textarea-success w-full" placeholder="Description" required></textarea>
                </div>
                <input className='btn mb-12' type='submit' value='Add Review' />

            </form>
        </div>
    );
};

export default AddService;