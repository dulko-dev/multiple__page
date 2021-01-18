import React, { useEffect, useState } from "react";

function Pagination({
  totalPage,
  numberPerPage,
  paginate,
  setPageNumbersArray,
}) {
  const [infoClose, setInfoClose] = useState("block");
  let info;
  const pageNumbers = [];
  useEffect(() => {
    setPageNumbersArray(pageNumbers.length);
  }, [pageNumbers]);

  const closeWindow = () => {
    setInfoClose("none");
  };

  for (let x = 1; x <= Math.ceil(totalPage / numberPerPage); x++) {
    if (pageNumbers.length === 6) {
      info = (
        <p
          style={{
            display: `${infoClose}`,
            color: "red",
            fontSize: "2em",
            position: "absolute",
            top: "0",
            right: "-400px",
            border: "1px solid red",
            padding: "10px",
            lineHeight:'40px'
          }}
        >
          Sorry, memory card is full <br />
          Press 'AC' to clean memory
          <button
            type="button"
            onClick={closeWindow}
            className="info__memory"
          ></button>
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
          <button
            key={page}
            onClick={() => paginate(page)}
            className="button__page"
          >
            {page}
          </button>
        ))}
        {info}
      </div>
    </>
  );
}

export default Pagination;
