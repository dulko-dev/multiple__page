import React from "react";

function YMCA() {
  return (
    <div className="YMCA">
      <h3 className="YMCA__title">Calculate your Body Fat Estimate</h3>
      <form>
        <span>Gender: </span>
        <input type="radio" value="female" id="female" name="gender" />
        <label htmlFor="female" className="YMCA__gender">
          Female
        </label>
        <input type="radio" value="male" id="male" name="gender" />
        <label htmlFor="male" className="YMCA__gender">
          Male
        </label>
        <label className="YMCA__label">
          <div>Waist [cm]</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="YMCA__label">
          <div>Weight [kg]</div>
          <input type="number" />
          <span></span>
        </label>
        <div className="YMCA__button">
          <button type="submit">Calculate</button>
          <button>Clear</button>
        </div>
      </form>
      <div className="YMCA__result">
        <p>
          Body Fat:<span>10%</span>
        </p>
        <p>
          Fat Mass:<span>20%</span>
        </p>
        <p>
          Lean Mass:<span>30%</span>
        </p>
        <p>
          Body Fat Category:<span>Acceptable </span>
        </p>
      </div>
    </div>
  );
}

export default YMCA;


  /* Body Fat Category: Dangerous Low 0-9, Essential Fat 10-13, Athletic 14-20, Acceptable 25-31, Obese 32+ */

