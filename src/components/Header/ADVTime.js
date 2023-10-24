import React, { useEffect, useState } from 'react';
import TrandingCarosel from './TrandingCarosel';
import { useNavigate } from 'react-router-dom';

const ADVTime = () => {
    const navigate = useNavigate();


    const advertisements = [
        {
            title: 'New Styles Added: 20% Off Select Styles',
            link: "Sign in and use code MEMBER20 at checkout."

        },
        {
            title: 'Why Wait? Try Store Pickup',
            link: 'Buy online and find a store near you for pick up in less than 2 hours. Shop now.',
        },
        {
            title: 'New Arrivals',
            link: 'Shop All',
        },
        {
            title: 'Members: Free Shipping on Orders $50+',
            link: 'Join Now',
        },
    ];
    const [currentAdvertisement, setCurrentAdvertisement] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentAdvertisement((prev) => (prev + 1) % advertisements.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [advertisements.length]);


    return (
        <>
            {/* Carousel */}
            <div className="bg-gray-100 p-4">
                <div className="relative overflow-hidden w-full h-14">
                    {advertisements.map((ad, index) => (
                        <div
                            key={index}
                            className={`absolute w-full h-16 transition-opacity duration-500 ${index === currentAdvertisement ? 'opacity-100' : 'opacity-0'
                                }`}
                        >
                            <div className='flex justify-center items-center'>
                                <div>
                                    <p className='text-xl  font-bold font-serif'>{ad.title}</p>
                                    <a className='underline flex items-center hover: text-slate-500' href="...."> {ad.link}</a>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            </div>


            <div className='h-1/2'>
                <div className="hero min-h-screen bg-[url('https://www.lesitedelasneaker.com/wp-content/images/2018/10/code-promo-nike-octobre-2018.jpg')]" >

                    <button onClick={() => navigate('/all_product')} className=" mt-80  btn btn-outline  btn-md rounded-full bg-black  text-white">Show Now</button>
                </div>
            </div>
            <br />


            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1'>




                <a href="...">
                    <img className="w-full h-full object-cover" src="https://static.nike.com/a/images/c_limit,w_400,f_auto/t_product_v1/40eb689e-3cd1-4ef2-bcbe-49126a80d9b3/image.jpg" alt="" />
                </a>
                <a href="...">
                    <img className="w-full h-full object-cover" src="https://img.etimg.com/thumb/width-1200,height-900,imgsize-68424,resizemode-75,msid-95149641/top-trending-products/lifestyle/best-selling-shoes-for-women-from-adidas-bata-campus-and-skechers.jpg" alt="" />
                </a>
                <a href="...">
                    <img className="w-full h-full object-cover" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5cf8be44-5418-46e1-996e-deb09074a3c6/club-fleece-set-younger-2-piece-set-4kfNMg.png" alt="" />
                </a>



            </div>

            <br />
            <div className="hero  " >

                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-6xl font-bold text-black">NEW ARRIVALS</h1>
                        <p className="mb-5 text-xl  text-black">Futuring the Air Force 1 Pro Tech </p>
                        <button onClick={() => navigate('/New_arrivals')} className="  btn btn-outline  btn-md rounded-xl bg-black  text-white">SHOW</button>
                    </div>
                </div>
            </div>
            <br />
            <TrandingCarosel />

        </>
    );
};

export default ADVTime;