import React, { useState } from "react";
import Pagination from "./Pagination";

function OutputResult({ setResult, result, operations }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [numberPerPage] = useState(4);

  // get numbers
  const indexOfLastNumber = currentPage * numberPerPage;
  const indexOfFirstNumber = indexOfLastNumber - numberPerPage;

  // change page
  const paginate = (number) => setCurrentPage(number);
    
  

  return (
    <div>
      <div>
        <Pagination
          totalPage={result.length}
          numberPerPage={numberPerPage}
          paginate={paginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
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
