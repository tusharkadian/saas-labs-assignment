import React from 'react';

const Pagination = ({ currentPage, totalPages, onNext, onPrevious, onPageChange }) => {
  const pageNumbers = [];
  const MAX_VISIBLE_PAGES = 3;

  // Display MAX_VISIBLE_PAGES around current page
  const startPage = Math.max(currentPage - Math.floor(MAX_VISIBLE_PAGES / 2), 1);
  const endPage = Math.min(currentPage + Math.floor(MAX_VISIBLE_PAGES / 2), totalPages);

  if (startPage > 1) {
    pageNumbers.push(1);
    if (startPage > 2) pageNumbers.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) pageNumbers.push('...');
    pageNumbers.push(totalPages);
  }

  return (
    <div className='pagination'>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        aria-label='Previous Page'
        className='pagination-btn'
      >
        Previous
      </button>

      {pageNumbers.map((page, index) => (
        <button
          key={index}
          onClick={() => {
            page !== '...' && onPageChange(page)
          }}
          disabled={page === '...'}
          className={`pagination-btn ${page === currentPage ? 'active' : ''}`}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        aria-label='Next Page'
        className='pagination-btn'
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
