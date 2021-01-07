import React, { useState } from "react";
import Pagination from "./Pagination";

function OutputResult({ result, operations }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage] = useState(4);

  // get numbers
  const indexOfLastNumber = currentPage * numberPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numberPerPage;

  // change page
  const paginate = (number) => setCurrentPage(number);

console.log(result)

  return (
    <div>
      <Pagination
        totalPage={result.length}
        numberPerPage={numberPerPage}
        paginate={paginate}
      />
      {/* <div className="outPutResult__arrows">
        <i className="fas fa-arrow-alt-circle-left"></i>
        <i className="fas fa-arrow-alt-circle-right"></i>
      </div> */}
      <div className="outPutResult__result outPutResult__screen__common">
        {result.slice(indexOfFirstNumber, indexOfLastNumber).map((result) => (
          <span key={Math.random() * 1000}>{result}</span>
        ))}
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
