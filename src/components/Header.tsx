import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from './UI/ShoppingCartIcon';

function Header() {
  return (
    <header className='header wrapper'>
      <Link to='/' className='link_unstressed'>
        <div className='text-logo'>OnlineStore</div>
      </Link>
      <Link to='/cart' className='link_unstressed'><ShoppingCartIcon /></Link>
    </header>
  )
}

export default Header;
