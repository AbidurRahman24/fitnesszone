import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import Navbar from '../../shared/Navbar';

const Shipment = () => {
    const { serviceId } = useParams()
    const [user] = useAuthState(auth)
    const [singleProduct, setSingleProduct] = useState([])
    useEffect(() => {
        fetch(`https://fitnesszone-server.vercel.app/services/${serviceId}`)
            .then(response => response.json())
            .then(data => {
                setSingleProduct(data)
            })
    }, [serviceId])
    const [info, setInfo] = useState({})
    const handleBlur = e => {
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const order = {
            name: event.target.name.value,
            email: user.email,
            service: singleProduct.title,
            price: singleProduct.price,
            serviceId: serviceId,
            address: event.target.address.value || 'Bangladesh',
        }
        const url = `https://fitnesszone-server.vercel.app/placeOrder`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(order),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {
                toast('Your order is booked!!!');
            });
        }
    return (
        <>
        <Navbar />
        

         <section className="bg-gray-50 min-h-screen flex items-center justify-center p-10 ">
         
        {/* <!-- login container --> */}
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
          {/* <!-- form --> */}
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold py-5 text-2xl text-[#002D74]">Shipment</h2>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="p-2 rounded-xl border"  onBlur={handleBlur} type="text" name='name' defaultValue={user.displayName} placeholder="name" />
              <input className="p-2 rounded-xl border"  onBlur={handleBlur} type="email" defaultValue={user.email} readOnly name='email' placeholder="Email" />
              <input className="p-2 rounded-xl border"  onBlur={handleBlur} type="text" name='address' placeholder="Enter Address"  />
              <h4 className='text-lg p-2'>Price: ${singleProduct.price} </h4>
              <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" type="submit">Place Order</button>
            </form>
            


          </div>
          <div className="md:block hidden w-1/2">
            <img className="rounded-2xl" src="https://images.unsplash.com/photo-1616606103915-dea7be788566?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80" />
          </div>
        </div>
        <ToastContainer />
      </section>
      
        </>
    );
};

export default Shipment;