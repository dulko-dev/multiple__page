import React from "react";

function BMI() {
  return (
    <div className="BMI">
      <h3 className="BMI__title">Calculate your BMI</h3>
      <form>
        <span>Gender: </span>
        <input type="radio" value="female" id="female" name="gender" />
        <label htmlFor="female" className="BMI__gender">
          Female
        </label>
        <input type="radio" value="male" id="male" name="gender" />
        <label htmlFor="male" className="BMI__gender">
          Male
        </label>
        <label className="BMI__label">
          <div>Age</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="BMI__label">
          <div>Height [cm]</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="BMI__label">
          <div>Weight [kg]</div>
          <input type="number" />
          <span></span>
        </label>
        <div className="BMI__button">
          <button type="submit">Calculate</button>
          <button>Clear</button>
        </div>
      </form>
      <div className="BMI__result">
        <h3>Result</h3>
        <p>
          BMI = <span>20kg/m2</span>
        </p>
      </div>
      <div className="BMI__bar">
        <span className="BMI__filler"></span>
      </div>
      <div className='BMI__bar__class'>
        <span>Underweight</span>
        <span>Normal</span>
        <span>Overweight</span>
        <span>Obesity</span>
      </div>
    </div>
  );
}

export default BMI;
