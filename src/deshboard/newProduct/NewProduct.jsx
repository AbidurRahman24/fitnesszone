import React from 'react';
import { FaAlignLeft } from 'react-icons/fa';
import Sidemenu from '../../shared/sidebar/Sidemenu';
import ProductForm from './ProductForm';

const NewProduct = () => {
    return (
        <>
        <section className='flex gap-6'>
    <Sidemenu />
        <div className="m-3 text-xl text-gray-900 font-semibold">
        <ProductForm />
        </div>

    </section>
        </>
    );
};

export default NewProduct;