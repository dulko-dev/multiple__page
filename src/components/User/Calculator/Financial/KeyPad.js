import React from "react";

function KeyPad({ handleNumber }) {
  return (
    <>
      <div className="financialCalc__calc__1st">
        <button
          value="AC"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.value)}
        >
          AC
        </button>
        <button
          value="back"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.value)}
        >
          <i className="fas fa-long-arrow-alt-left"></i>
        </button>
        <button
          value="CE"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.value)}
        >
          CE
        </button>
        <button
          value="%"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.value)}
        >
          %
        </button>
        <button
          value="/"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.value)}
        >
          /
        </button>
      </div>
      <div className="financialCalc__calc__2rd">
        <button value="7" onClick={(e) => handleNumber(e.target.value)}>
          7
        </button>
        <button value="8" onClick={(e) => handleNumber(e.target.value)}>
          8
        </button>
        <button value="9" onClick={(e) => handleNumber(e.target.value)}>
          9
        </button>
        <button
          value="*"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.value)}
        >
          x
        </button>
      </div>
      <div className="financialCalc__calc__3rd">
        <button value="4" onClick={(e) => handleNumber(e.target.value)}>
          4
        </button>
        <button value="5" onClick={(e) => handleNumber(e.target.value)}>
          5
        </button>
        <button value="6" onClick={(e) => handleNumber(e.target.value)}>
          6
        </button>
        <button
          value="-"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.value)}
        >
          -
        </button>
      </div>
      <div className="financialCalc__calc__4th">
        <button onClick={(e) => handleNumber(e.target.value)} value="1">
          1
        </button>
        <button onClick={(e) => handleNumber(e.target.value)} value="2">
          2
        </button>
        <button onClick={(e) => handleNumber(e.target.value)} value="3">
          3
        </button>
        <button
          value="+"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.value)}
        >
          +
        </button>
      </div>
      <div className="financialCalc__calc__5th">
        <button
          value="0"
          id="key0"
          onClick={(e) => handleNumber(e.target.value)}
        >
          0
        </button>
        <button value="." onClick={(e) => handleNumber(e.target.value)}>
          .
        </button>
        <button
          value="="
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.value)}
         
        >
          =
        </button>
      </div>
    </>
  );
}

export default KeyPad;
