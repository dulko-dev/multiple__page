import React from "react";

function KeyPad({ handleNumber }) {
  return (
    <>
      <div className="financialCalc__calc__1st">
        <button
          name="AC"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.name)}
        >
          AC
        </button>
        <button
          name="back"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.name)}
        >
          <i className="fas fa-long-arrow-alt-left"></i>
        </button>
        <button
          name="CE"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.name)}
        >
          CE
        </button>
        <button
          name="%"
          className="calc__grey"
          onClick={(e) => handleNumber(e.target.name)}
        >
          %
        </button>
        <button
          name="/"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.name)}
        >
          /
        </button>
      </div>
      <div className="financialCalc__calc__2rd">
        <button name="7" onClick={(e) => handleNumber(e.target.name)}>
          7
        </button>
        <button name="8" onClick={(e) => handleNumber(e.target.name)}>
          8
        </button>
        <button name="9" onClick={(e) => handleNumber(e.target.name)}>
          9
        </button>
        <button
          name="*"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.name)}
        >
          x
        </button>
      </div>
      <div className="financialCalc__calc__3rd">
        <button name="4" onClick={(e) => handleNumber(e.target.name)}>
          4
        </button>
        <button name="5" onClick={(e) => handleNumber(e.target.name)}>
          5
        </button>
        <button name="6" onClick={(e) => handleNumber(e.target.name)}>
          6
        </button>
        <button
          name="-"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.name)}
        >
          -
        </button>
      </div>
      <div className="financialCalc__calc__4th">
        <button name="1" onClick={(e) => handleNumber(e.target.name)}>
          1
        </button>
        <button name="2" onClick={(e) => handleNumber(e.target.name)}>
          2
        </button>
        <button name="3" onClick={(e) => handleNumber(e.target.name)}>
          3
        </button>
        <button
          name="+"
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.name)}
        >
          +
        </button>
      </div>
      <div className="financialCalc__calc__5th">
        <button name="0" id="key0" onClick={(e) => handleNumber(e.target.name)}>
          0
        </button>
        <button name="." onClick={(e) => handleNumber(e.target.name)}>
          .
        </button>
        <button
          name="="
          className="calc__orange"
          onClick={(e) => handleNumber(e.target.name)}
        >
          =
        </button>
      </div>
    </>
  );
}

export default KeyPad;
