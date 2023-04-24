import React from 'react';
import { getData } from '../../Component/utilits/database';
import { Link } from 'react-router-dom';

const Order = ({ cart, cleartoCart, children }) => {

    let total = 0;
    for (const p of cart) {
        total += p.price;
    }
    return (
        <div className='flex flex-col items-center p-5' >
            <h1 className="text-xl font-bold">
                Order summry
            </h1>
            <div className='text-xl font-semibold'>
                <p>Select Item : {cart.length}</p>
                <p>Total Price : {total}$</p>
            </div>
            <button className='py-2 px-2 bg-rose-500 rounded-md w-full mt-5 text-white'>Clear Cart</button>
            <Link to='/orders-review'>
                <button className='py-2 px-2 bg-rose-500 rounded-md w-full mt-5 text-white'>{children}</button>

            </Link>

        </div>
    );
};

export default Order;