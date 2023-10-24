import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
const ProductCarasole = ({ items, condition }) => {
    const navigate = useNavigate();
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + items.length) % items.length);
    };

    return (
        <>
            <div className="relative m-3">

                <div className="flex items-center justify-center">

                    <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-2 sm:grid-cols-1'>

                        {
                            items[currentIndex].imgList.map((v, index) =>
                                <div key={index} className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">




                                    <Link to={v?.location}><img className="w-full h-72  object-cover rounded" src={v.image} alt="" />
                                    </Link>,

                                    <div class="p-5">
                                        <a href="...">
                                            <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{v.tittle}</h5>
                                        </a>
                                        {
                                            condition === "sport_details" && <div >
                                                <p className=' mb-4 text-xl text-gray-900 dark:text-white'>{v?.discription}</p>
                                                <Link to={`/trandint_product/${index + 1}`} className='underline text-2xl font-serif  text-gray-900 dark:text-white hover:text-red-500' href="..."> Shop</Link>
                                            </div>
                                        }
                                        {
                                            condition === "new_style" && <div className='flex justify-between' >
                                                <p className='  text-xl text-gray-900 dark:text-white'>{v?.discription}</p>
                                                <p className='  text-xl text-gray-900 dark:text-white'>{v?.price}</p>
                                            </div>

                                        }
                                        {
                                            condition === "nike_membership" && <div className='flex justify-between'>
                                                <p className='  text-xl text-gray-900 dark:text-white'>{v?.discription}</p>
                                                <button onClick={() => navigate(`/trandint_product/${index + 1}`)} className='btn btn-outline btn-sm  text-gray-900 dark:text-white'>{v?.button}</button>
                                            </div>
                                        }



                                    </div>
                                </div>
                            )
                        }



                    </div>

                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4 cursor-pointer">
                    <button
                        onClick={prevSlide}
                        className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <AiOutlineArrowLeft className='text-xl' />
                    </button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer">
                    <button
                        onClick={nextSlide}
                        className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
                    >
                        <AiOutlineArrowRight className='text-xl' />
                    </button>
                </div>
            </div>

        </>
    );
};

export default ProductCarasole;