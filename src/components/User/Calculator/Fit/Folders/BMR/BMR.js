import React from "react";

function BMR() {
  return (
    <div className="BMR">
      <h3>Calculate your Base Metabolism Rate</h3>
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
          Age: <input type="number" />
        </label>
        <label>
          Height: <input type="number" />
        </label>
        <label>
          Weight: <input type="number" />
        </label>
        <button type='submit'>Calculate</button>
      </form>
      <div>Result: 9999kcal</div>
    </div>
  );
}

export default BMR;
