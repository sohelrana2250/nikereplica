import React from 'react';
import items from './../../Utilites/IconicProject.json'

import ProductCarasole from '../Reuseable/ProductCarasole';
import SportProduct from './SportProduct';
const FeaturedProduct = () => {




    return (
        <>
            <h1 className='text-5xl font-serif  sm:text-center m-3'>Featured</h1>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-2'>

                <div className=" ml-12 hero min-h-screen bg-[url('https://grailify.com/rails/active_storage/blobs/proxy/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMEZJQXc9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--6148ab5ad35bea3acaec2cd6fd8f4992e66b894f/image')]" >

                    <h1 className='text-5xl font-serif  sm:text-center m-3 mb-10'>All The  Gretest GIFT</h1>
                    <p className='text-xl font-serif -mb-10'>By You,For Them</p>
                    <p className='text-3xl font-serif -mb-24'>The Best Customer Gift</p>
                    <button className=" -mb-40  btn btn-outline  btn-sm rounded-full bg-yellow-300 text-slate-700">Show All Gift</button>

                </div>

                <div className="bg-[url('https://static.nike.com/a/images/f_auto/2e8d9338-b43d-4ef5-96e1-7fdcfd838f8e/image.jpg')]">
                    <div className=' flex justify-center items-center mt-96'>
                        <button className="btn btn-outline mb-20  btn-sm rounded-md bg-yellow-200 text-slate-700">All SHOP</button>
                    </div>
                </div>

            </div>

            {/* Always Iconic */}
            <h1 className='text-5xl font-serif  sm:text-center m-3'>Always Iconic </h1>
            <ProductCarasole items={items} />
            <SportProduct />
        </>
    );
};

export default FeaturedProduct;