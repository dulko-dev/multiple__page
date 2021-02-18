import React, { useEffect, useRef, useState } from "react";
import Pagination from "./Pagination";

function OutputResult({
  result,
  operations,
  setOperations,
  pressKey,
  setState,
  handleNumber,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageNumbersArray, setPageNumbersArray] = useState("");
  const [numberPerPage] = useState(1);

  const refInput = useRef(null);

  useEffect(() => {
    refInput.current.focus();
  }, []);

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

  const styleBtn = (e) => {
    switch (e.key) {
      case "1":
        setState({ one: "#162537" });
        break;
      case "2":
        setState({ two: "#162537" });
        break;
      case "3":
        setState({ three: "#162537" });
        break;
      case "4":
        setState({ four: "#162537" });
        break;
      case "5":
        setState({ five: "#162537" });
        break;
      case "6":
        setState({ six: "#162537" });
        break;
      case "7":
        setState({ seven: "#162537" });
        break;
      case "8":
        setState({ eight: "#162537" });
        break;
      case "9":
        setState({ nine: "#162537" });
        break;
      case "0":
        setState({ zero: "#162537" });
        break;
      case "Escape":
        setState({ ac: "#162537" });
        break;
      case "Backspace":
        setState({ backArrow: "#162537" });
        break;
      case "CE":
        setState({ ce: "#162537" });
        break;
      case "%":
        setState({ percentage: "#162537" });
        break;
      case "/":
        setState({ divide: "#162537" });
        break;
      case "-":
        setState({ substract: "#162537" });
        break;
      case "+":
        setState({ add: "#162537" });
        break;
      case ".":
        setState({ dot: "#162537" });
        break;
      case "Enter":
        setState({ equal: "#162537" });
        break;
      case "*":
        setState({ multiple: "#162537" });
        break;
      default:
        setOperations("");
    }
  };
  const styleBtn2 = (e) => {
    switch (e.key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case "Escape":
      case "Backspace":
      case "CE":
      case "%":
      case "/":
      case "-":
      case "+":
      case ".":
      case "Enter":
      case "*":
        setState({
          one: "",
          two: "",
          three: "",
          four: "",
          five: "",
          six: "",
          seven: "",
          eight: "",
          nine: "",
          zero: "",
          ac: "",
          backArrow: "",
          ce: "",
          percentage: "",
          divide: "",
          substract: "",
          add: "",
          dot: "",
          equal: "",
          multiple: "",
        });
        break;
      default:
        setOperations("");
    }
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
        ref={refInput}
        className="outPutResult__screen outPutResult__screen__common"
        onChange={(e) => setOperations(e.target.value)}
        value={operations}
        onKeyDown={(e) => {
          pressKey(e);
          styleBtn(e);
        }}
        onKeyUp={styleBtn2}
      />
    </div>
  );
}

export default OutputResult;
