import React, { useContext, useEffect, useState } from 'react';
import ProductDisplay from '../../Reuseable/ProductDisplay';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const FetchAllProduct = () => {

    const [allProduct, setAllProduct] = useState([]);
    const { setAddproduct } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [isLoading, setLoading] = useState(true);
    //pagination 
    const [page, setPage] = useState(0);
    const [size, setSize] = useState('10');
    const pagination = (size.concat(" ", page));
    const pages = Math.ceil(75 / size);
    const offset = parseInt(pagination.split(" ")[0]);
    const limit = parseInt(pagination.split(" ")[1]);


    const handelProductAddToCard = (product) => {

        //product Add To card process
        setCart([...cart, product]);
        setAddproduct(cart);
    }



    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${limit}&limit=${offset}`).then((res) => res.json()).then((data) => {

            setAllProduct(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error?.message);
        })

    }, [offset, limit]);


    return (
        <>

            <div className="flex justify-center">
                <div style={{
                    marginLeft: "200px",
                    marginBottom: '50px'
                }}>
                    <p className='text-xl font-serif  m-3'>Current Page  :  {page + 1} and Size:{size}</p>
                    {
                        [...Array(pages).keys()].map((number) => <button className="mr-3 text-xl btn btn-outline btn-sm" key={number} onClick={() => { setPage(number) }} >{number + 1}</button>)
                    }
                    <select className="rounded-xl" onChange={(event) => setSize(event.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                        <option value="25">25</option>
                    </select>
                </div>
            </div>

            <ProductDisplay allProduct={allProduct} isLoading={isLoading} handelProductAddToCard={handelProductAddToCard} />
            {/* <div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3  gap-2 sm:grid-cols-1'>




                    {
                        allProduct?.map((v, index) => <div key={index} className="max-w-full rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={v?.category?.image} alt="" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{v.title
                                }</div>
                                <p className="text-gray-700 text-base">{v?.description.slice(0, 60) + '....'
                                }</p>
                                <p className="text-gray-700 text-base">Price: {v?.price}</p>
                            </div>
                            <div className="px-6 py-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{v.category?.name}</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Brand Name : #<span className='text-sm font-serif'>Nike</span></span>
                            </div>
                            <div className="flex justify-between ">
                                <button onClick={() => handelProductAddToCard(v)} className="btn btn-outline  btn-sm">
                                    Add to Cart
                                </button>
                               
                                <button className="btn btn-outline  btn-sm" onClick={() => handelProductDetails(v)}>Details</button>

                            </div>


                        </div>)
                    }



                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box ">
                            <form method="dialog">
                               
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            <br />


                            <ProductCarousel items={productDetails?.images || ''} />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{productDetails?.title || ''
                                }</div>
                                <p className="text-gray-700 text-base">{productDetails?.description || ''
                                }</p>
                                <p className="text-gray-700 text-base">Price: {productDetails?.price || ''} </p>
                            </div>
                            <div className="px-6 py-4">
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#{productDetails?.category?.name || ''}</span>
                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">Brand Name : #<span className='text-sm font-serif'>Nike</span></span>
                            </div>
                            <div className="px-6 py-4">

                                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#<span className='text-sm font-serif'>All Size Available</span></span>
                            </div>
                        </div>
                    </dialog>

                </div>
            </div> */}


        </>
    );
};

export default FetchAllProduct;