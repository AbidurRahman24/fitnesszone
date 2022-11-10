import React from 'react';
import { FaAccessibleIcon } from 'react-icons/fa';
import TranningCard from './TranningCard';

const Tranning = () => {
    return (
        <>
         <section className='py-10 pt-10'>
            <div className='container mx-auto text-center px-5 py-4'>
          <div className='flex py-5 text-center'>
            <FaAccessibleIcon className='text-red-700 items-cente pl-3 text-4xl' />
            <h1 className='pl-3 text-4xl '> <b>TRAINING PROGRAMS</b></h1>
          </div>
         
        </div>
        <TranningCard />
        </section> 
        </>
    );
};

export default Tranning;