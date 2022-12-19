import React from 'react';
import SvgSelector from './SvgSelector';

function SearchBar() {
  return (
    <div className='search-bar'>
      <label >
        <SvgSelector id='magnifier' />
        <input type="text" placeholder='Search on OnlineStore' />
      </label>
    </div>
  )
}

export default SearchBar;