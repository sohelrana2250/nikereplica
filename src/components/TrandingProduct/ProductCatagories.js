import React from 'react';

import MenuDashbord from '../Reuseable/MenuDashbord';

import { useParams } from 'react-router-dom';
import CatagoriesProduct from './CatagoriesProduct';
const ProductCatagorie = () => {
    const { id } = useParams();
    return (
        <>

            <div className="flex">
                <MenuDashbord />

                <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
                    < CatagoriesProduct id={parseInt(id)} />
                </div>
            </div>

        </>
    );
};

export default ProductCatagorie;