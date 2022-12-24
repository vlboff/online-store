import React, { useState } from 'react';
import SvgSelector from './SvgSelector';

interface IProductInfo{
  id: number; 
  count: number; 
  price: number
}

let products = JSON.parse(localStorage.getItem('onlineStore') || '[]');

function ShoppingCartIcon() {
  let [numberOfProducts, setNumberOfProducts] = useState(products.length);
  let [cost, setCost] = useState(products?.reduce((acc: number, product: IProductInfo) => acc + (product.price * product.count), 0))
  console.log(products)
  return (
    <div className='shopping-cart-icon'>
      <SvgSelector id='shopping-cart-icon' />
      {
        numberOfProducts
          ? <div className="shopping-cart-icon__numder-of-products">{numberOfProducts}</div>
          : ''
      }
      {
        cost
          ? <span className='shopping-cart-icon__cost'>: €{cost}</span>
          : <span className='shopping-cart-icon__cost'></span>
      }
    </div>
  )
}

export default ShoppingCartIcon;