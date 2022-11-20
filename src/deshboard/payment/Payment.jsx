import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51JRrBrJJw9W9jRGG1SeX3fyEczwUy3LRpIt2UJwMwHCg5hHQJO3DABdA9dqfVp2FFvqLqxlyk3M3MJMn3uMqX4rR00DEG4pDeY');

const Payment = () => {
    const { id } = useParams()
    const url = `http://localhost:5000/order/${id}`
    const [data, setData] = useState([])
    const {name, service,  email, price} = data
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setData(result)
            })
    }, [])

    return (
        <div>
            <h2 className="text-2x1 text-purple-500"> Please Play for: {id}</h2>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Hello <span className='text-orange-500'>{data.name}</span></h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
                
            <Elements stripe={stripePromise}>
    <CheckoutForm data={data} />
  </Elements>
            </div>
        </div>
    );
};

export default Payment;