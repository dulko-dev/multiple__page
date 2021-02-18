import React from "react";
import UserNav from "../UserNav";
import FinancialCalc from "./Financial/FinancialCalc";
import FitCalc from "./Fit/FitCalc";
import bg from '../../../assets/calculator-bg.jpg'

function Calculator() {
  return (
    <>
      <UserNav />
      <img src={bg} alt='background' style={{position:'fixed', width:'100%', height:'100%', left:'0', bottom:'0', zIndex:'-1', opacity:'0.9'}} />
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
