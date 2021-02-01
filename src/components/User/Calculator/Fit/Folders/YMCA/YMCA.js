import React, { useState } from "react";

function YMCA() {
  const [state, setState] = useState({
    waist: "",
    weight: "",
    checkedFemale: false,
    checkedMale: false,
  });

  const [result, setResult] = useState("");
  const [fatMass, setFatMass] = useState("");
  const [leanMass, setLeanMass] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let infoCategory;
  switch (true) {
    case result > 0 && result <= 9:
      infoCategory = "Dangerous Low";
      break;
    case result >= 10 && result <= 13:
      infoCategory = "Esential Fat";
      break;
    case result >= 14 && result <= 20:
      infoCategory = "Athletic";
      break;
    case result >= 21 && result <= 31:
      infoCategory = "Acceptable";
      break;
    case result >= 32:
      infoCategory = "Obese";
      break;
    default:
      infoCategory = "";
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      state.waist === "" ||
      state.weight === "" ||
      (state.checkedFemale === false && state.checkedMale === false)
    )
      return;

    let result = 0;
    let fatMass = 0;
    let leanMass = 0;

    if (state.checkedFemale) {
      result =
        (-76.76 + 4.15 * state.waist - (0.082 * state.weight) / state.weight) /
        10;
      fatMass = (result / 100) * state.weight;
      leanMass = state.weight - fatMass;
    } else if (state.checkedMale) {
      result =
        (-98.42 + 4.15 * state.waist - (0.082 * state.weight) / state.weight) /
        10;
      fatMass = (result / 100) * state.weight;
      leanMass = state.weight - fatMass;
    } else {
      console.log("slaps on your face");
    }

    setResult(result.toFixed(2));
    setFatMass(fatMass.toFixed(2));
    setLeanMass(leanMass.toFixed(2));

    setState({
      waist: "",
      weight: "",
      checkedFemale: false,
      checkedMale: false,
    });
  };

  console.log(fatMass);

  const handleClear = () => {
    setState({
      waist: "",
      weight: "",
      checkedFemale: false,
      checkedMale: false,
    });
    setResult("");
    setFatMass("");
    setLeanMass("");
  };

  return (
    <div className="YMCA">
      <h3 className="YMCA__title">Calculate your Body Fat Estimate</h3>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="female" className="YMCA__gender">
          Female
        </label>
        <input
          type="radio"
          value="male"
          id="male"
          name="gender"
          onChange={() =>
            setState((prev) => ({
              ...prev,
              checkedFemale: false,
              checkedMale: true,
            }))
          }
          checked={state.checkedMale}
        />
        <label htmlFor="male" className="YMCA__gender">
          Male
        </label>
        <label className="YMCA__label">
          <div>Waist [cm]</div>
          <input
            type="number"
            name="waist"
            value={state.waist}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="YMCA__label">
          <div>Weight [kg]</div>
          <input
            type="number"
            name="weight"
            value={state.weight}
            onChange={handleInput}
          />
          <span></span>
        </label>
        <div className="YMCA__button">
          <button type="submit">Calculate</button>
          <button onClick={handleClear}>Clear</button>
        </div>
      </form>
      <div className="YMCA__result">
        <p>
          Body Fat:<span>{result + "%"}</span>
        </p>
        <p>
          Fat Mass:<span>{fatMass + "kg"}</span>
        </p>
        <p>
          Lean Mass:<span>{leanMass + "kg"}</span>
        </p>
        <p>
          Body Fat Category:<span> {infoCategory} </span>
        </p>
      </div>
    </div>
  );
}

export default YMCA;
