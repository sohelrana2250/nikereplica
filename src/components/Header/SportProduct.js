import React from 'react';
import items from './../../Utilites/SportProduct.json';
import ProductCarasole from '../Reuseable/ProductCarasole';
import NewStyle from './NewStyle';
const SportProduct = () => {
    return (
        <>
            <h1 className='text-5xl font-serif  sm:text-center m-3'>Shop by Sport </h1>
            <ProductCarasole items={items} condition="sport_details" />
            {/* New Fall Styles */}
            <NewStyle />
        </>
    );
};

export default SportProduct;