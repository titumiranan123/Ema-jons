import React, { useState } from 'react';


const Products = ({ products, addtoCart }) => {
    const [see, setSee] = useState(true);

    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-5'>
                {
                    see ? products.slice(0, 9).map(p =>
                        <div className='bg-gray-300 p-3 shadow-md rounded-lg relative h-[520px] md:h-[380px] lg:h-[500px]' key={p.id}>
                            <img src={p.img} alt="" />
                            <p className='mt-6'>{p.name}</p>
                            <p> Price:{p.price} $</p>
                            <button onClick={() => addtoCart(p)} className='font-bold py-2 px-3 rounded-lg  bg-sky-400 absolute bottom-2'>Add to Cart</button>

                        </div>
                    ) :
                        products.map(p =>
                            <div className='bg-gray-300 p-3 shadow-md rounded-lg relative h-[520px] md:h-[380px] lg:h-[500px]' key={p.id}>
                                <img src={p.img} alt="" />
                                <p className='mt-6'>{p.name}</p>
                                <p> Price:{p.price} $</p>
                                <button className='font-bold py-2 px-3 rounded-lg  bg-sky-400 absolute bottom-2'>Add to Cart</button>

                            </div>
                        )
                }
            </div >
            <div className="flex justify-center mt-10">
                <button className='py-2 px-3 bg-sky-400 rounded  ' onClick={() => setSee(!see)}> See All</button>
            </div>

        </>
    );
};

export default Products;