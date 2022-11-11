import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';

const MyReview = () => {
    const { service } = useContext(AuthContext);
    const reviews = useLoaderData();




    return (
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Review</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            reviews.map(review => (
                                <tr>
                                    <th>
                                        <label>
                                            <button className='btn btn-ghost'>X</button>
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={review.ImageURL} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{review.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {review.review}
                                        <br />
                                    </td>
                                    <th>
                                        <button className="btn btn-ghost btn-xs">Edit Review</button>
                                    </th>
                                </tr>
                            ))
                        }

                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyReview;