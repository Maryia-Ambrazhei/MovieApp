import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './MoviesPagination.css';

const MoviesPagination = ({ currentPage, lastPage, onPaginationClick }) => {
  const handleClick = pageNumber => {
    onPaginationClick(pageNumber);
  };

  const isFirst = currentPage === 1;
  const isLast = currentPage === lastPage;

  const getPagesArray = () => {
    let start = Math.max(currentPage - 2, 1);
    const end = Math.min(start + 4, lastPage);
    if (isLast || currentPage === lastPage - 1) {
      start = lastPage - 4;
    }
    const pagesArray = new Array();
    for (let a = start; a <= end; a += 1) {
      pagesArray.push(a);
    }
    return pagesArray;
  };

  return (
    <div className="pagination-section">
      <Pagination className="pagination">
        <Pagination.Item disabled={isFirst} onClick={() => handleClick(1)}>
          {'<<'}
        </Pagination.Item>
        <Pagination.Item disabled={isFirst} onClick={() => handleClick(currentPage - 1)}>
          {'<'}
        </Pagination.Item>
        {getPagesArray().map(page => (
          <Pagination.Item
            key={page}
            className="page-button"
            active={page === currentPage}
            onClick={() => handleClick(page)}
          >
            {page}
          </Pagination.Item>
        ))}
        <Pagination.Item disabled={isLast} onClick={() => handleClick(currentPage + 1)}>
          {'>'}
        </Pagination.Item>
        <Pagination.Item disabled={isLast} onClick={() => handleClick(lastPage)}>
          {'>>'}
        </Pagination.Item>
      </Pagination>{' '}
    </div>
  );
};

export default MoviesPagination;
