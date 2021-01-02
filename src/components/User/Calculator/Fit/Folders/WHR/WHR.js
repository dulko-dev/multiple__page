import React from "react";

function WHR() {
  return (
    <div className="whr">
      <h3>Calculate your Waist to Hip Ratio</h3>
      <form>
        <span>Gender: </span>
        <label>
          <input type="radio" />
          Male
        </label>
        <label>
          <input type="radio" />
          Female
        </label>
        <label>
          Waist: <input type="number" />
        </label>
        <label>
          Hip: <input type="number" />
        </label>
      <button type='submit'>Calculate</button>
      </form>
    </div>
  );
}

export default WHR;
