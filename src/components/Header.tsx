import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './UI/SearchBar';
import ShoppingCartIcon from './UI/ShoppingCartIcon';
import TextLogo from './UI/TextLogo';

interface Props {
  isSearchBar: boolean;
}

function Header({ isSearchBar }: Props) {
  return (
    <header className='header wrapper'>
      <Link to='/' className='link_unstressed'><TextLogo /></Link>
      {
        isSearchBar
          ? <SearchBar />
          : ''
      }
      <Link to='/cart' className='link_unstressed'><ShoppingCartIcon /></Link>
    </header>
  )
}

export default Header;