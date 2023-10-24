import React from 'react';
import items from './../../Utilites/NewStye.json';
import ProductCarasole from '../Reuseable/ProductCarasole';
import MemberShip from './MemberShip';

const NewStyle = () => {
    return (
        <>
            <h1 className='text-5xl font-serif  sm:text-center m-3'>New Fall Styles </h1>
            <ProductCarasole items={items} condition="new_style" />
            <MemberShip />

        </>
    );
};

export default NewStyle;