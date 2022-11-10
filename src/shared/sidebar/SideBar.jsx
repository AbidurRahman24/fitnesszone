import React from 'react';
import Chart from '../../deshboard/chart/Chart';
import Happy from '../../deshboard/happy/Happy'
import ProductTable from '../../deshboard/table/ProductTable';
import Sidemenu from './Sidemenu';
const SideBar = () => {

    return (
        <>
            <section className='flex gap-6'>
                <Sidemenu />
                <div className="m-3 text-xl text-gray-900 font-semibold">
                    <Happy />
                    <Chart />
                    <ProductTable />
                </div>

            </section>
        </>
    );
};

export default SideBar;