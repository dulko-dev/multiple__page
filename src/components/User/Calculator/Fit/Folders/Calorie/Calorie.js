import React from "react";

function Calorie() {
  return (
    <div className="calorie">
      <h3>Calculate Calories</h3>
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
        <label>
          <span>Activity: </span>
          <select>
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
        <button type="submit">Calculate</button>
      </form>
      <div>
        <p>Result: </p>
        <p>Maintain weight:</p>
        <p>Mild weight loss:</p>
        <p>Weight loss:</p>
        <p>Extreme weight loss:</p>
      </div>
    </div>
  );
}

export default Calorie;
