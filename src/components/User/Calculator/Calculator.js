import React from "react";
import UserNav from "../UserNav";
import FinancialCalc from "./Financial/FinancialCalc";
import FitCalc from "./Fit/FitCalc";
import bg from "../../../assets/calculator-bg.jpg";
import bgWebp from "../../../assets/webP/calculator-bg.webp";

function Calculator() {
  return (
    <>
      <UserNav />
      <picture>
        <source srcSet={bgWebp} type="image/webp" />
        <source srcSet={bg} type="images/jpg" />
        <img
          src={bg}
          alt="background"
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: "0",
            bottom: "0",
            zIndex: "-1",
          }}
        />
      </picture>
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
