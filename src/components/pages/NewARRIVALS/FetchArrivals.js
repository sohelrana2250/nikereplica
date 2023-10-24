import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ProductDisplay from '../../Reuseable/ProductDisplay';

const FetchArrivals = () => {

    //https://api.escuelajs.co/api/v1/products/?categoryId=1
    const [allProduct, setAllProduct] = useState([]);
    const { setAddproduct } = useContext(AuthContext);
    const [cart, setCart] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const handelProductAddToCard = (product) => {

        //product Add To card process
        setCart([...cart, product]);
        setAddproduct(cart);
    }


    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products/?categoryId=1`).then((res) => res.json()).then((data) => {

            setAllProduct(data);
            setLoading(false);
        }).catch((error) => {
            console.log(error?.message);
        })

    }, []);
    return (
        <>

            <ProductDisplay allProduct={allProduct} isLoading={isLoading} handelProductAddToCard={handelProductAddToCard} />

        </>
    );
};

export default FetchArrivals;