import React from 'react';

interface IPaginationProps {
  itemsPerPage: number;
  totalItems: number;
  paginate(number: number): void
}

function Pagination({ itemsPerPage, totalItems, paginate }: IPaginationProps) {
  const numberOfPages = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i += 1) {
    numberOfPages.push(i);
  }

  return (
    <div className='pagination'>
      <ul>
        Pages:
        {
          numberOfPages.map(number => {
            return (
              <li className='pagination__page' key={number} onClick={() => paginate(number)}>
                <div className='pagination__page-link'>
                  {number}
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Pagination;