import React from "react";

function FinancialCalc() {
  return (
    <div className="financialCalc">
      <h3 className='financialCalc__title'>Finance Calculator</h3>
      <div className="financialCalc__calc">
        <div>
          <input
            type="text"
            className="financialCalc__calc__result financialCalc__screen__common"
          />
          <input
            type="text"
            className="financialCalc__calc__screen financialCalc__screen__common"
          />
        </div>

        <div className="financialCalc__calc__1st">
          <span className="calc__grey">AC</span>
          <span className="calc__grey">+/-</span>
          <span className="calc__grey">%</span>
          <span className="calc__orange">/</span>
        </div>
        <div className="financialCalc__calc__2rd">
          <span>7</span>
          <span>8</span>
          <span>9</span>
          <span className="calc__orange">X</span>
        </div>
        <div className="financialCalc__calc__3rd">
          <span>4</span>
          <span>5</span>
          <span>6</span>
          <span className="calc__orange">-</span>
        </div>
        <div className="financialCalc__calc__4th">
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span className="calc__orange">+</span>
        </div>
        <div className="financialCalc__calc__5th">
          <span id="key0">0</span>
          <span>.</span>
          <span className="calc__orange">=</span>
        </div>
      </div>
    </div>
  );
}

export default FinancialCalc;
