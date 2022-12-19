import React from 'react';
import SearchBar from './UI/SearchBar';
import ShoppingCartIcon from './UI/ShoppingCartIcon';
import TextLogo from './UI/TextLogo';

interface Props {
  isSearchBar: boolean;
}

function Header({ isSearchBar }: Props) {
  return (
    <header className='header wrapper'>
      <TextLogo />
      {
        isSearchBar
          ? <SearchBar />
          : ''
      }
      <ShoppingCartIcon />
    </header>
  )
}

export default Header;