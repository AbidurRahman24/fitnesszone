import React from 'react';
import Head from './Head';
import MainNav from './MainNav';

const Navbar = () => {
    return (
        <>
            <div className='container mx-auto'>
                <Head />
                <MainNav />
            </div>
        </>
    );
};

export default Navbar;