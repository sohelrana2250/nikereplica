import React from 'react';
import ProductCarasole from '../Reuseable/ProductCarasole';
import items from '../../Utilites/Nikemembership.json';
import menubar from '../../Utilites/AppData.json';
const MemberShip = () => {


    return (
        <>
            {/* Nike Membership */}
            <h1 className='text-5xl font-serif  sm:text-center m-3'>Nike Membership</h1>
            <ProductCarasole items={items} condition="nike_membership" />
            <br />
            <div className='flex justify-center items-center'>
                <div className=' m-3 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-36 '>
                    {
                        menubar?.map((v, index) => <div key={index}>

                            <a href="..." className="m-3 text-2xl font-serif">
                                {v.title}
                            </a>
                            {
                                v?.subItems?.map((v, index) => <div key={index}>
                                    <a href='...' className='text-xl font-serif m-3 ' >{v.catagoties}</a>
                                    <div className='lg:hidden'>
                                        {
                                            v?.items?.map((v, index) => <p className='block py-2 pl-3 pr-4 hover:bg-slate-300 btn-sm rounded-lg' key={index}>{v}</p>)
                                        }
                                    </div>


                                </div>)
                            }
                        </div>)
                    }

                </div>
            </div>


        </>
    );
};

export default MemberShip;