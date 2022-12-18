import React from 'react';
import SvgSelector from './SvgSelector';

function ShoppingCartIcon() {
  return (
    <div className='shopping-cart'>
      <a href="#">
        <SvgSelector id='shopping-cart' />
      </a>
      <span className='shopping-cart__amount'>: €0.00</span>
    </div>
  )
}

export default ShoppingCartIcon;