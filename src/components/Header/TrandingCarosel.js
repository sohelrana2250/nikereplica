import React from 'react';

import items from './../../Utilites/TrandingCarasol.json'
import FeaturedProduct from './FeaturedProduct';
import ProductCarasole from '../Reuseable/ProductCarasole';

const TrandingCarosel = () => {

    return (
        <>
            <h1 className='text-5xl font-serif  sm:text-center m-3'>Tranding Product</h1>
            <ProductCarasole items={items} />
            <FeaturedProduct />

        </>
    );
};

export default TrandingCarosel;