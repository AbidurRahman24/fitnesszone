import React, { useEffect, useState } from 'react';
import { FaAccessibleIcon } from 'react-icons/fa';
import Footer from '../../../shared/footer/Footer';
import Navbar from '../../../shared/Navbar';
import ShopCard from './ShopCard';

const Shop = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => {

                setServices(data)
            })
    }, [])
    return (
        <>
            <div className='container mx-auto drop-shadow-xl'>
                <Navbar />
            </div>
            <section className='py-10 pt-10'>
                <div className='container mx-auto flex  justify-between px-5 py-4'>
                    <div className='heading flex py-5'>
                        <FaAccessibleIcon className='text-red-700 items-cente pl-3 text-4xl' />
                        <h1 className='pl-3 text-4xl'> <b>My Shop</b></h1>
                    </div>
                </div>
                <div className='flex flex-wrap'>
                    {
                        services.map((service) => (<>
                            <ShopCard
                                key={service._id}
                                service={service}
                            />
                        </>
                        ))
                    }
                </div>

            </section>
            <Footer />
        </>
    );
};

export default Shop;