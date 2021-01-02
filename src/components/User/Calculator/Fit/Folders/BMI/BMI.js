import React from "react";

function BMI() {
  return (
    <div className="BMI">
      <h3 className="BMI__title">Calculate your BMI</h3>
      <form>
        <span>Gender: </span>
        <label>
          <input type="radio" value="male" id='male' name='gender'/>Male
        </label>
        <label>
          <input type="radio" value="female" id='female' name='gender'/>Female
          </label>
        <label className="BMI__age">
          Age:
          <input type="number" />
        </label>
        <label>
          Height:
          <input type="number" />
        </label>
        <label>
          Weight:
          <input type="number" />
        </label>
        <button type="submit">Calculate</button>
        <button>Clear</button>
      </form>
      <h3>Result</h3>
      <p>BMI = 20kg/m2</p>
      <div className="BMI__bar">
        <span className="BMI__filler"></span>
      </div>
    </div>
  );
}

export default BMI;
