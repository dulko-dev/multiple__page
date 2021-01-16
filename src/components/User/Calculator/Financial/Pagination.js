import React from "react";

function Pagination({ totalPage, numberPerPage, paginate }) {

  
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPage / numberPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="pagination">
        {pageNumbers.map((page) => (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
      </div>
    </>
  );
}

export default Pagination;
