import React, { useState } from "react";

function BMR({ resultBMR, setResultBMR }) {
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

  const handleForm = (e) => {
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
      setResultBMR(result.toFixed(1));
      setState({
        age: "",
        height: "",
        weight: "",
        checkedFemale: false,
        checkedMale: false,
      });
      setError(false);
    }
  };

  const handleClear = () => {
    setState({
      age: "",
      height: "",
      weight: "",
      checkedFemale: false,
      checkedMale: false,
    });
    setResultBMR("");
    setError(false);
  };

  return (
    <div className="BMR">
      <h3 className="BMR__title">Calculate your Base Metabolism Rate</h3>
      <form onSubmit={handleForm}>
        <span>Gender: </span>
        <input
          type="radio"
          value="female"
          id="female"
          name="gender"
          onChange={() =>
            setState((prev) => ({
              ...prev,
              checkedFemale: true,
              checkedMale: false,
            }))
          }
          checked={state.checkedFemale}
        />
        <label htmlFor="female" className="BMR__gender">
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
        <label htmlFor="male" className="BMR__gender">
          Male
        </label>

        <label className="BMR__label">
          <div>Age</div>
          <input
            type="number"
            name="age"
            value={state.age}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="BMR__label">
          <div>Height [cm]</div>
          <input
            type="number"
            name="height"
            value={state.height}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="BMR__label">
          <div>Weight [kg]</div>
          <input
            type="number"
            name="weight"
            value={state.weight}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <div className="BMR__button">
          <button type="submit">Calculate</button>
          <button type="button" onClick={handleClear}>
            Clear
          </button>
        </div>
      </form>
      <div className="BMR__result">
        Result:<span>{resultBMR} [kcal] </span>
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

export default BMR;
