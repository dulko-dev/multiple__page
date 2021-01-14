import React, { useState } from "react";
import KeyPad from "./KeyPad";
import OutputResult from "./OutputResult";

function FinancialCalc() {
  const [result, setResult] = useState([]);
  const [operations, setOperations] = useState("");


  const handleNumber = (keypad) => {
    
    if (keypad === "=") {
      calculate();
    } else if (keypad === "back") {
      backspace();
    } else if (keypad === "AC") {
      reset();
    } else if (keypad === "CE") {
      clearOperations();
    } else if (keypad === "%") {
      setOperations(operations / 100);
    } else {
      setOperations(operations + keypad);
    }
  };

  const calculate = () => {
    try {
      setResult([...result, eval(operations)]);
      setOperations("");

    } catch (e) {
      setOperations("error");
    }
  };
  
  const reset = () => {
    setOperations("");
    setResult("");
  };
  const backspace = () => {
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
          setResult={setResult}
        />
        <KeyPad handleNumber={handleNumber} />
      </div>
    </div>
  );
}

export default FinancialCalc;
