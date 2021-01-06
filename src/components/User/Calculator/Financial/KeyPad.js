import React from "react";

function KeyPad() {
  return (
   <>
      <div className="financialCalc__calc__1st">
        <button className="calc__grey">AC</button>
        <button className="calc__grey">+/-</button>
        <button className="calc__grey">%</button>
        <button className="calc__orange">/</button>
      </div>
      <div className="financialCalc__calc__2rd">
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="calc__orange">X</button>
      </div>
      <div className="financialCalc__calc__3rd">
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button className="calc__orange">-</button>
      </div>
      <div className="financialCalc__calc__4th">
        <button name="1">1</button>
        <button>2</button>
        <button>3</button>
        <button className="calc__orange">+</button>
      </div>
      <div className="financialCalc__calc__5th">
        <button id="key0">0</button>
        <button>.</button>
        <button className="calc__orange">=</button>
      </div>
    </>
  );
}

export default KeyPad;
