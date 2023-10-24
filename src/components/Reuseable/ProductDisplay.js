import React, { useState } from 'react';

import ProductCarousel from '../pages/AllProducts/ProductCarousel';

const ProductDisplay = ({ allProduct, isLoading, handelProductAddToCard }) => {

    const [productDetails, setProductDetails] = useState({});


    const handelProductDetails = (details) => {
        document.getElementById('my_modal_3').showModal()
        setProductDetails(details)
    }




    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-3  gap-2 sm:grid-cols-1'>

                {
                    isLoading && <div className='flex justify-center items-center'>
                        <div role="status">
                            <svg aria-hidden="true" className="inline w-12 h-12 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>
                }

                {/* second card  */}

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
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-outline  btn-sm" onClick={() => handelProductDetails(v)}>Details</button>

                        </div>


                    </div>)
                }



                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box ">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
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
        </>
    );
};

export default ProductDisplay;