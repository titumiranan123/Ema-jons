import React, { useEffect, useState } from 'react';
import Products from './products/Products';
import Order from './Orders/Order';
import { getData, removeFromCart, storeData } from '../Component/utilits/database';

const Shopcontainer = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const addtoCart = product => {
        const addedCart = [...cart, product];
        setCart(addedCart);
        storeData(product);
    }
    const cleartoCart = product => {
        for (const p of product) {
            const remaining = removeFromCart(p.id)
            setCart(remaining);
        }
    }

    return (
        <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-3'>
            <div className='col-span-2 '>
                <Products products={products}
                    addtoCart={addtoCart} />
            </div>
            <div className="col-span-1 bg-yellow-200 mt-5">

                <Order cleartoCart={cleartoCart}
                    cart={cart} >
                    Review Order
                </Order>
            </div>

        </div>
    );
};

export default Shopcontainer;