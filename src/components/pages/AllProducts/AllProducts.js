import React from 'react';
import FetchAllProduct from './../AllProducts/FetchAllProduct';

import MenuDashbord from '../../Reuseable/MenuDashbord';

const AllProducts = () => {


    return (
        <>
            <div className="flex">
                <MenuDashbord />

                <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
                    <FetchAllProduct />
                </div>
            </div>

        </>
    );
};

export default AllProducts;