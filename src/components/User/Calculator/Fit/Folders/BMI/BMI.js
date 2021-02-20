import React, { useState } from "react";

function BMI({ resultBMI, setResultBMI }) {
  const [state, setState] = useState({
    age: "",
    height: "",
    weight: "",
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

  const handlCalculate = (e) => {
    e.preventDefault();
    if (
      state.age === "" ||
      state.height === "" ||
      state.weight === "" ||
      (state.checkedFemale === false && state.checkedMale === false)
    ) {
      setError(true);
      return;
    } else {
      let result = 0;
      result = (state.weight / Math.pow(state.height, 2)) * 10000;
      setResultBMI(result.toFixed(1));
      setError(false);
    }

    setState({
      age: "",
      height: "",
      weight: "",
      checkedFemale: false,
      checkedMale: false,
    });
  };

  const handleClear = () => {
    setState({
      age: "",
      height: "",
      weight: "",
      checkedFemale: false,
      checkedMale: false,
    });
    setResultBMI("");
    setError(false);
  };

  const colorOfBackground =
    resultBMI <= 16
      ? "BMI__underweight"
      : resultBMI <= 25 && resultBMI > 16
      ? "BMI__normal"
      : resultBMI > 25 && resultBMI <= 30
      ? "BMI__overweight"
      : resultBMI > 30
      ? "BMI__obese"
      : "";

  // const colorOfBackgroundForYoung = result <= 5 ? 'BMI__underweight__Y' : result >5 &&  result <

  return (
    <div className="BMI">
      <h3 className="BMI__title">Calculate your BMI</h3>
      <form onSubmit={handlCalculate}>
        <span>Gender: </span>
        <input
          type="radio"
          value="female"
          id="female"
          onChange={() =>
            setState((prev) => ({
              ...prev,
              checkedFemale: true,
              checkedMale: false,
            }))
          }
          checked={state.checkedFemale}
        />
        <label htmlFor="female" className="BMI__gender">
          Female
        </label>
        <input
          type="radio"
          value="male"
          id="male"
          onChange={() =>
            setState((prev) => ({
              ...prev,
              checkedFemale: false,
              checkedMale: true,
            }))
          }
          checked={state.checkedMale}
        />
        <label htmlFor="male" className="BMI__gender">
          Male
        </label>
        <label className="BMI__label">
          <div>Age</div>
          <input
            type="number"
            name="age"
            onChange={handleInput}
            value={state.age}
          />
          <span></span>
        </label>
        <label className="BMI__label">
          <div>Height [cm]</div>
          <input
            type="number"
            name="height"
            onChange={handleInput}
            value={state.height}
          />
          <span></span>
        </label>
        <label className="BMI__label">
          <div>Weight [kg]</div>
          <input
            type="number"
            name="weight"
            onChange={handleInput}
            value={state.weight}
          />
          <span></span>
        </label>
        <div className="BMI__button">
          <button type="submit">Calculate</button>
          <button type='button' onClick={handleClear}>Clear</button>
        </div>
      </form>
      <div className="BMI__result">
        Result: <span>{resultBMI}[kg/m2]</span>
      </div>

      <>
        <div className="BMI__bar">
          <span
            className={`${colorOfBackground}`}
            style={{ width: `${resultBMI * 2.5}%` }}
          ></span>
        </div>
        <div className="BMI__bar__class">
          <span>Underweight</span>
          <span>Normal</span>
          <span>Overweight</span>
          <span>Obesity</span>
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
      </>
    </div>
  );
}

export default BMI;
