import React, { useEffect, useState } from 'react';
import SvgSelector from './SvgSelector';

interface IProductInfo {
  id: number;
  count: number;
  price: number
}

function ShoppingCartIcon() {
  const localStorageData = window.localStorage.getItem('onlineStore');
  const [productsAmount, setProductsAmount] = useState(0);

  useEffect(() => {
      const productsAmount = JSON.parse(localStorage.getItem('onlineStore') || '[]').length;
      if (productsAmount) {
        setProductsAmount(productsAmount);
      }
    }, [localStorageData]);

  const [cost, setCost] = useState(0);

  useEffect(() => {
    const totalCost = JSON.parse(localStorage.getItem('onlineStore') || '[]')
      .reduce((acc: number, product: IProductInfo) => acc + (product.price * product.count), 0);
    if (totalCost) {
      setCost(totalCost);
    }
  }, [localStorageData]);

  return (
    <div className='shopping-cart-icon'>
      <SvgSelector id='shopping-cart-icon' />
      {
        productsAmount
          ? <div className="shopping-cart-icon__numder-of-products">{productsAmount}</div>
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
