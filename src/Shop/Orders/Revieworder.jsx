import React from 'react';
import Order from './Order';
import { getData } from '../../Component/utilits/database';


const Revieworder = () => {
    const cart = getData();
    console.log(cart)
    return (
        <div className='md:grid md:grid-cols-3 lg:grid lg:grid-cols-3' >
            <div className='col-span-2 mt-5'>
                {
                    cart.map(p => <div className='flex p-2 bg-gray-300 mt-1 rounded'>
                        <img className='w-[100px] h-25 mt-2' src={p.img} alt="" />
                        <div className='ms-5 p-5 font-semibold'>
                            <p>{p.name}</p>
                            <p>Price : {p.price} $</p>
                            <p>Shipping Charge : $ {p?.shipping}</p>
                        </div>
                    </div>)
                }
            </div>
            <div className='bg-yellow-200 mt-5'>
                <Order cart={cart} > Proceed to Checkout</Order>
            </div>
        </div>
    );
};

export default Revieworder;