import React, { useEffect, useState } from 'react';
import { FaAccessibleIcon, FaCaretRight } from "react-icons/fa";
import Card from './Card';

const Services = () => {
  const [card, setCard] = useState([])
  const [services, setServices] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/services')
      .then(response => response.json())
      .then(data => {

        setServices(data)
      })
  }, [])
    const handleAddService = (service) => {
        const newCard = [...card, service]
        setCard(newCard)

    }
    return (
        <section className='py-10 pt-10'>
            <div className='container mx-auto flex  justify-between px-5 py-4'>
          <div className='heading flex py-5'>
            <FaAccessibleIcon className='text-red-700 items-cente pl-3 text-4xl' />
            <h1 className='pl-3 text-4xl'> <b>OUR PACKAGES</b></h1>
          </div>
          <div className=' pl-3 flex  items-center'>
                    <span>View all</span>
                    <FaCaretRight />
                </div>
         
        </div>
        <div className='flex flex-wrap'>
        {
          services.map((service )=> (<>
<Card 
        key={service._id}
        handleAddService={handleAddService}
        service={service}
        />
        </>
          ))
        }
        </div>
        
        </section>
    );
};

export default Services;