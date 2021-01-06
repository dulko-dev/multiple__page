import React from "react";
import KeyPad from "./KeyPad";
import OutputResult from "./OutputResult";

function FinancialCalc() {
  return (
    <div className="financialCalc">
      <h3 className="financialCalc__title">Finance Calculator</h3>
      <div className="financialCalc__calc">
        <OutputResult />
        <KeyPad />
      </div>
    </div>
  );
}

export default FinancialCalc;
