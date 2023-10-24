import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';


const AddToCard = () => {
    const { addProduct, setAddproduct } = useContext(AuthContext);

    const handelRemovePrroduct = (product) => {


        const removeProduct = addProduct.filter((item) => item.id !== product.id);
        setAddproduct(removeProduct);


    }


    return (
        <>


            <div className="p-4 max-w-3xl mx-auto mt-16">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="flex items-center justify-between px-4 py-3 bg-gray-200">
                        <h1 className="text-lg font-bold">Shopping Cart</h1>
                        <span className="text-gray-600">({addProduct.length} items)</span>
                    </div>
                    <div className="p-4">
                        {
                            addProduct?.map((v, index) => <div key={index} className="flex items-center mb-4">
                                <img className="h-16 w-16 object-contain rounded-lg mr-4" src={v?.category?.image}
                                    alt="Product" />
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold">{v?.title}</h2>
                                    <span className="text-gray-600">$ {v?.price}</span>
                                </div>
                                <div className="flex-1">
                                    <h2 className="text-lg font-bold">{v?.category?.name}</h2>
                                    <span className="text-gray-600"> {new Date().toString().slice(0, 23)}</span>
                                </div>

                                <button onClick={() => handelRemovePrroduct(v)} className="text-gray-600 hover:text-red-500">
                                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 13H5v-2h14v2z" />
                                    </svg>
                                </button>
                            </div>)
                        }


                    </div>
                    <div className="px-4 py-3 bg-gray-200">
                        <div className="flex justify-between items-center">
                            <span className="font-bold text-lg">Total:</span>
                            <span className="font-bold text-lg">${10500}</span>
                        </div>
                        <button className="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                            Checkout
                        </button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AddToCard;