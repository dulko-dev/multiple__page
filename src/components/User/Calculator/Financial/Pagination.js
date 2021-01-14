import React from "react";

function Pagination({
  currentPage,
  setCurrentPage,
  totalPage,
  numberPerPage,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPage / numberPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleLeft = () => {
    if (currentPage < 2) return;
    setCurrentPage(currentPage - 1);
  };
  const handleRight = () => {
   
    setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <div className="pagination">
        {pageNumbers.map((page) => (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
      </div>
      <div className="outPutResult__arrows">
        <i className="fas fa-arrow-alt-circle-left" onClick={handleLeft}></i>
        <i className="fas fa-arrow-alt-circle-right" onClick={handleRight}></i>
      </div>
    </>
  );
}

export default Pagination;
