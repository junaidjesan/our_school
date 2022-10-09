import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from '../ProductCart/ProductCart';

const Products = () => {
    const productData=useLoaderData()
    const sliceProduct=productData.slice(1,20)
    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                sliceProduct.map(product=><ProductCart key={product.id} product={product}></ProductCart>)
            }
        </div>
    );
};

export default Products;