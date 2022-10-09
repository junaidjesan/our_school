import React from 'react';

const ProductCart = ({product}) => {
    const {body,id,userId,title}=product
    console.log(product)
    return (
        <div className='border-2 p-3'>
            <h1>Body:{body.slice(1,40)}...</h1>
            <h2>Id:{id}</h2>
            <h2>User Id:{userId}</h2>
            <h1>Title: {title}</h1>
            <button className='btn btn-wide mb-0'>Add</button>
        </div>
    );
};

export default ProductCart;