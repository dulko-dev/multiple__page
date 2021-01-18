import React, { useState } from "react";
import Pagination from "./Pagination";

function OutputResult({ result, operations }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbersArray, setPageNumbersArray] = useState("");
  const [numberPerPage] = useState(4);

  console.log(pageNumbersArray);

  // get numbers
  const indexOfLastNumber = currentPage * numberPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numberPerPage;
  const currentResult = result.slice(indexOfFirstNumber, indexOfLastNumber);

  // change page
  const paginate = (number) => {
    setCurrentPage(number);
  };

  const handleLeft = () => {
    setCurrentPage(currentPage - 1);
  };
  const handleRight = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <div>
        <Pagination
          totalPage={result.length}
          numberPerPage={numberPerPage}
          paginate={paginate}
          handleLeft={handleLeft}
          handleRight={handleRight}
          setPageNumbersArray={setPageNumbersArray}
       
        />
      </div>
      <div className="outPutResult__result outPutResult__screen__common">
        {currentResult.map((result) => (
          <span key={Math.random() * 1000}>{result}</span>
        ))}
        <i
          className={`fas fa-arrow-alt-circle-left arrow-left ${
            currentPage === 1 && "arrow-disabled"
          }`}
          onClick={handleLeft}
        ></i>
        <i
          className={`${
            currentPage === pageNumbersArray ||
            currentPage - 1 === pageNumbersArray
              ? "arrow-disabled"
              : "fas fa-arrow-alt-circle-right arrow-right"
          }`}
          onClick={handleRight}
        ></i>
      </div>
      <input
        type="text"
        className="outPutResult__screen outPutResult__screen__common"
        defaultValue={operations}
      />
    </div>
  );
}

export default OutputResult;
