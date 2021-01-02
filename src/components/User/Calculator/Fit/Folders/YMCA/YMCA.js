import React from "react";

function YMCA() {
  return (
    <div className="ymca">
      <h3>Calculate your Body Fat Estimate</h3>
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
          Weight: <input type="number" />
        </label>
        <button type="submit">Calculate</button>
      </form>
      <div>
          <p>Result: </p>
          <p>Body Fat:</p>
          <p>Fat Mass:</p>
          <p>Lean Mass:</p>
          <p>Body Fat Category:</p>
      </div>
    </div>
  );
}

export default YMCA;
