import React, { useState } from "react";
import KeyPad from "./KeyPad";
import OutputResult from "./OutputResult";

function FinancialCalc() {
  const [result, setResult] = useState([]);
  const [operations, setOperations] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [state, setState] = useState({
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

  const handleNumber = (keypad) => {
    if (keypad === "Enter") {
      calculate();
    } else if (keypad === "Backspace") {
      backspace();
    } else if (keypad === "AC") {
      reset();
      setCurrentPage(1);
    } else if (keypad === "CE") {
      clearOperations();
    } else if (keypad === "%") {
      percentage();
    } else {
      setOperations(operations + keypad);
    }
  };

  const pressKey = (e) => {
    if (e.key === "Enter") {
      calculate();
    } else if (e.key === "Escape") {
      reset();
    }
  };

  const percentage = () => {
    setOperations((operations / 100).toString());
  };


  /* eslint no-eval: 0 */

  const calculate = () => {
    if (operations === "") return;
    try {
      setResult([...result, eval(operations)]);
      setOperations("");
    } catch (e) {
      setOperations("error");
    }
  };

  const reset = () => {
    setResult([]);
  };

  const backspace = () => {
    if (operations === "") return;
    setOperations(operations.slice(0, -1));
  };

  const clearOperations = () => {
    setOperations("");
  };

  return (
    <div className="financialCalc">
      <h3 className="financialCalc__title">Finance Calculator</h3>

      <div className="financialCalc__calc">
        <OutputResult
          result={result}
          operations={operations}
          setOperations={setOperations}
          pressKey={pressKey}
          setState={setState}
          handleNumber={handleNumber}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <KeyPad handleNumber={handleNumber} state={state} />
      </div>
    </div>
  );
}

export default FinancialCalc;
