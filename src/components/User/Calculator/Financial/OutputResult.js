import React from "react";

function OutputResult({ result, operations }) {
  return (
    <div>
      <div className="outPutResult__result outPutResult__screen__common">{result}
      </div>
      <input
        type="text"
        className="outPutResult__screen outPutResult__screen__common" defaultValue={operations}
      />
    </div>
  );
}

export default OutputResult;
