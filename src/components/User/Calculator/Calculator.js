import React from "react";
import UserNav from "../UserNav";
import FinancialCalc from "./Financial/FinancialCalc";
import FitCalc from "./Fit/FitCalc";

function Calculator() {
  return (
    <>
      <UserNav />
      <div className="calculator">
        <div className="calculator__finance">
          <FinancialCalc />
        </div>
        <div className="calculator__fit">
          <FitCalc />
        </div>
      </div>
    </>
  );
}

export default Calculator;
