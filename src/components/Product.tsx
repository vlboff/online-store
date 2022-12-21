import React from 'react';

interface IProductID {
  id: number;
}

function Product({id}: IProductID) {
  return (
    <div className='product wrapper'>
      <div className="">
        <h1>Product {id}</h1>
      </div>
    </div>
  )
}

export default Product;