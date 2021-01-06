import React from "react";

function Calorie() {
  return (
    <div className="calorie">
      <h3 className="calorie__title">Calculate calories</h3>
      <form>
        <span>Gender: </span>
        <input type="radio" value="female" id="female" name="gender" />
        <label htmlFor="female" className="calorie__gender">
          Female
        </label>
        <input type="radio" value="male" id="male" name="gender" />
        <label htmlFor="male" className="calorie__gender">
          Male
        </label>
        <label className="calorie__label">
          <div>Age</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="calorie__label">
          <div>Height [cm]</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="calorie__label">
          <div>Weight [kg]</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="calorie__label__select">
          <span>Activity: </span>
          <select className="calorie__select">
            <option>Choose your activity</option>
            <option>Sedentary: little or no exercise</option>
            <option>Light: exercise 1-3 times/week</option>
            <option>Moderate: exercise 4-5 times/week</option>
            <option>
              Active: daily exercise or intense exercise 3-4 times/week
            </option>
            <option>Very Active: intense exercise 6-7 times/week</option>
            <option>
              Extra Active: very intense exercise daily, or physical job
            </option>
          </select>
        </label>
        <div className="calorie__button">
          <button type="submit">Calculate</button>
          <button>Clear</button>
        </div>
      </form>
      <div className="calorie__result">
        <p>
          Maintain weight: <span>1800 [kcal] </span>
        </p>
        <p>
          Mild weight loss:<span>1600 [kcal]</span>
        </p>
        <p>
          Weight loss: <span> 1400 [kcal]</span>
        </p>
        <p>
          Extreme weight loss: <span> 1200 [kcal]</span>
        </p>
      </div>
    </div>
  );
}

export default Calorie;
