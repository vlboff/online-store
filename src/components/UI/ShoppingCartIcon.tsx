import React from 'react';
import SvgSelector from './SvgSelector';

function ShoppingCartIcon() {
  return (
    <div className='shopping-cart-icon'>
      <SvgSelector id='shopping-cart-icon' />
      <span className='shopping-cart-icon__amount'>: €0.00</span>
    </div>
  )
}

export default ShoppingCartIcon;