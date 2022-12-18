import React from 'react';
import SvgSelector from './UI/SvgSelector';

function Header() {
  return (
    <header className='header wrapper'>
      <div className='text-logo'><a href="#">OnlineStore</a></div>
      <div className='search-bar'>
        <label >
          <SvgSelector id='magnifier' />
          <input type="text" placeholder='Search on OnlineStore' />
        </label>
      </div>
      <div className='shopping-cart'>
        <a href="#">
          <SvgSelector id='shopping-cart' />
        </a>
      </div>
    </header>
  )
}

export default Header;