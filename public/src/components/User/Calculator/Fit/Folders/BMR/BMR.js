import React from "react";

function BMR() {
  return (
    <div className="BMR">
      <h3 className="BMR__title">Calculate your Base Metabolism Rate</h3>
      <form>
        <span>Gender: </span>
        <input type="radio" value="female" id="female" name="gender" />
        <label htmlFor="female" className="BMR__gender">
          Female
        </label>
        <input type="radio" value="male" id="male" name="gender" />
        <label htmlFor="male" className="BMR__gender">
          Male
        </label>

        <label className="BMR__label">
          <div>Age</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="BMR__label">
          <div>Height [cm]</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="BMR__label">
          <div>Weight [kg]</div>
          <input type="number" />
          <span></span>
        </label>
        <div className="BMR__button">
          <button type="submit">Calculate</button>
          <button>Clear</button>
        </div>
      </form>
      <div className="BMR__result">
        Result: <span>9999kcal </span>
      </div>
    </div>
  );
}

export default BMR;
