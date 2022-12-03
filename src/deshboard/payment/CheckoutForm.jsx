import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ data }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('')
    const [success, setSuccess] = useState('')
    const [proceesing, setProceesing] = useState(false)
    const [transectionId, setTransectionId] = useState('')
    const [clientSecret, setClientSecret] = useState("");

    const {_id, price, name, email } = data
    useEffect(() => {
        fetch('https://fitnesszone-server.vercel.app/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(paymentdata => {
                if (paymentdata?.clientSecret) {
                    setClientSecret(paymentdata.clientSecret)
                }
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });
        setCardError(error?.message || '');
        setSuccess('')
        setProceesing(true)

        //   confirm payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message)
            setProceesing(false)
        } else {
            setCardError('')
            setTransectionId(paymentIntent.id)
            setSuccess('Congragets your payment')

            // store payment in database
            const payment ={
                service: _id,
                transectionId: paymentIntent.id,

            }
            fetch(`https://fitnesszone-server.vercel.app/services/:${id}`,
            {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(payment)
            }).then(res =>res.json())
            .then(data =>{
                setProceesing(false)
            })
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement />
                <button className='btn btn-success' type="submit" disabled={!stripe || !elements}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transection Id: <span className='text-orange-500'>{transectionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;
