import React, { useState } from "react";

function Calorie({ resultCalorie, setResultCalorie }) {
  const [state, setState] = useState({
    age: "",
    height: "",
    weight: "",
    select: "",
    checkedFemale: false,
    checkedMale: false,
  });
  const [error, setError] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();
    if (
      state.age === "" ||
      state.height === "" ||
      state.weight === "" ||
      state.select === "" ||
      (state.checkedFemale === false && state.checkedMale === false)
    ) {
      setError(true);
      return;
    } else {
      let result = 0;
      if (state.checkedFemale) {
        result =
          665.1 +
          9.563 * state.weight +
          1.85 * state.height -
          4.676 * state.age;
      } else if (state.checkedMale) {
        result =
          66.47 +
          13.75 * state.weight +
          5.003 * state.height -
          6.755 * state.age;
      }

      setResultCalorie((result * state.select).toFixed(1));
    }
    setState({
      age: "",
      height: "",
      weight: "",
      select: "choose",
      checkedFemale: false,
      checkedMale: false,
    });
    setError(false);
  };

  const handleClear = () => {
    setState({
      age: "",
      height: "",
      weight: "",
      checkedFemale: false,
      checkedMale: false,
    });
    setResultCalorie("");
    setError(false);
  };

  let mildLossPerentage = resultCalorie * 0.1;
  let normalLossPercentage = resultCalorie * 0.19;
  let highLossPercentage = resultCalorie * 0.41;

  return (
    <div className="calorie">
      <h3 className="calorie__title">Calculate calories</h3>
      <form onSubmit={handleForm}>
        <span>Gender: </span>
        <input
          type="radio"
          value="female"
          id="female"
          name="gender"
          checked={state.checkedFemale}
          onChange={() =>
            setState((prev) => ({
              ...prev,
              checkedFemale: true,
              checkedMale: false,
            }))
          }
        />
        <label htmlFor="female" className="calorie__gender">
          Female
        </label>
        <input
          type="radio"
          value="male"
          id="male"
          name="gender"
          checked={state.checkedMale}
          onChange={() =>
            setState((prev) => ({
              ...prev,
              checkedFemale: false,
              checkedMale: true,
            }))
          }
        />
        <label htmlFor="male" className="calorie__gender">
          Male
        </label>
        <label className="calorie__label">
          <div>Age</div>
          <input
            type="number"
            name="age"
            value={state.age}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="calorie__label">
          <div>Height [cm]</div>
          <input
            type="number"
            name="height"
            value={state.height}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="calorie__label">
          <div>Weight [kg]</div>
          <input
            type="number"
            name="weight"
            value={state.weight}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="calorie__label__select">
          <span>Activity: </span>
          <select
            className="calorie__select"
            onChange={handleInput}
            value={state.select}
            name="select"
          >
            <option value="choose">Choose your activity</option>
            <option value="1.1">Sedentary: little or no exercise</option>
            <option value="1.2">Light: exercise 1-3 times/week</option>
            <option value="1.375">Moderate: exercise 4-5 times/week</option>
            <option value="1.55">
              Active: daily exercise or intense exercise 3-4 times/week
            </option>
            <option value="1.725">
              Very Active: intense exercise 6-7 times/week
            </option>
            <option value="1.9">
              Extra Active: very intense exercise daily, or physical job
            </option>
          </select>
        </label>
        <div className="calorie__button">
          <button type="submit">Calculate</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
      <div className="calorie__result">
        <p>
          Maintain weight: <span>{resultCalorie * 1} [kcal] </span>
        </p>
        <p>
          Mild weight loss:
          <span>{(resultCalorie - mildLossPerentage).toFixed(1)} [kcal]</span>
        </p>
        <p>
          Weight loss:
          <span>
            {(resultCalorie - normalLossPercentage).toFixed(1)} [kcal]
          </span>
        </p>
        <p>
          Extreme weight loss:
          <span> {(resultCalorie - highLossPercentage).toFixed(1)} [kcal]</span>
        </p>
      </div>
      {error && (
        <p
          style={{
            color: "rgb(255, 73, 92)",
            fontWeight: "600",
            textAlign: "center",
            paddingTop: "10px",
          }}
        >
          Error: complete the blank
        </p>
      )}
    </div>
  );
}

export default Calorie;
