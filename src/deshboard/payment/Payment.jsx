import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';
import Sidemenu from '../../shared/sidebar/Sidemenu';

const stripePromise = loadStripe('pk_test_51JRrBrJJw9W9jRGG1SeX3fyEczwUy3LRpIt2UJwMwHCg5hHQJO3DABdA9dqfVp2FFvqLqxlyk3M3MJMn3uMqX4rR00DEG4pDeY');

const Payment = () => {
    const { id } = useParams()
    const url = `https://fitnesszone-server.vercel.app/order/${id}`
    const [data, setData] = useState([])
    const { name, service, email, price } = data
    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: {
                authorization: `bearer ${localStorage.getItem('token')}`
            }
        })
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
    }, [])

    return (
        <div>
            <section className='flex gap-6'>
                <Sidemenu />

                <div className="card w-80  bg-base-100 shadow-xl">

                    <div className="card-body">
                        <h2 className="text-2x1 text-purple-500"> Please Play for: {id}</h2>
                        <h2 className="card-title">Hello <span className='text-orange-500'>{name}</span></h2>
                        <h2 className="card-title">Email: <span className='text-orange-500'>{email}</span></h2>
                        <h2 className="card-title">Service: <span className='text-orange-500'>{service}</span></h2>
                        <h2 className="card-title">Price: <span className='text-orange-500'>{price}</span></h2>

                        <Elements className='py-5' stripe={stripePromise}>
                            <CheckoutForm data={data} />
                        </Elements>
                    </div>


                </div>
            </section>
        </div>
    );
};

export default Payment;