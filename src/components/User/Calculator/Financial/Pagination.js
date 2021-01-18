import React, { useEffect } from "react";

function Pagination({
  totalPage,
  numberPerPage,
  paginate,
  setPageNumbersArray,
}) {
  const pageNumbers = [];
  let info;
  useEffect(() => {
    setPageNumbersArray(pageNumbers.length);
  }, [pageNumbers]);

  for (let x = 1; x <= Math.ceil(totalPage / numberPerPage); x++) {
    if (pageNumbers.length === 3) {
      info = (
        <p
          style={{
            color: "red",
            fontSize: "2em",
            position: "absolute",
            top: "0",
            right: "-400px",
            border: "1px solid red",
            padding: "5px",
          }}
        >
          Sorry, memory card is full
        </p>
      );
    } else {
      pageNumbers.push(x);
    }
  }

  return (
    <>
      <div className="pagination">
        {pageNumbers.map((page) => (
          <button key={page} onClick={() => paginate(page)}>
            {page}
          </button>
        ))}
        {info}
      </div>
    </>
  );
}

export default Pagination;
