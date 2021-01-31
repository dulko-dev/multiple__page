import React, { useState } from "react";

function WHR() {
  const [state, setState] = useState({
    waist: "",
    hip: "",
    checkedFemale: false,
    checkedMale: false,
  });
  const [result, setResult] = useState("");
  const [displayShape, setDisplayShape] = useState("none");

  console.log(result);
  const handleInput = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      state.waist === "" ||
      state.hip === "" ||
      (state.checkedFemale === false && state.checkedMale === false)
    )
      return;

    let result = state.waist / state.hip;
    setResult(result.toFixed(2));
    setState((prev) => ({ ...prev, waist: "", hip: "" }));
  };

  const clearInput = () => {
    setState({ waist: "", hip: "", checkedFemale: false, checkedMale: false });
    setResult("");
  };

  const lowRisk =
    `${
      state.checkedFemale && Number(result) && result <= 0.8 ? "#7FD1B9" : ""
    }` ||
    `${state.checkedMale && Number(result) && result <= 0.95 ? "#7FD1B9" : ""}`;

  const mediumRisk =
    `${
      state.checkedFemale && Number(result) && result >= 0.81 && result <= 0.84
        ? "#F08700"
        : ""
    }` ||
    `${
      state.checkedMale && Number(result) && result >= 0.96 && result <= 1
        ? "#F08700"
        : ""
    }`;

  const highRisk =
    `${
      state.checkedFemale && Number(result) && result >= 0.85 ? "#E3170A" : ""
    }` ||
    `${state.checkedMale && Number(result) && result > 1 ? "#E3170A" : ""}`;

  return (
    <div className="WHR">
      <h3 className="WHR__title">Calculate your Waist to Hip Ratio</h3>
      <form onSubmit={handleSubmit}>
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
        <label htmlFor="female" className="WHR__gender">
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
        <label htmlFor="male" className="WHR__gender">
          Male
        </label>

        <label className="WHR__label">
          <div>Waist [cm]</div>
          <input
            type="number"
            value={state.waist}
            name="waist"
            onChange={handleInput}
          />
          <span></span>
        </label>
        <label className="WHR__label">
          <div>Hip [cm]</div>
          <input
            type="number"
            value={state.hip}
            name="hip"
            onChange={handleInput}
          />
          <span></span>
        </label>
        <div className="WHR__button">
          <button type="submit">Calculate</button>
          <button onClick={clearInput}>Clear</button>
        </div>
      </form>
      <div className="WHR__result">
        <div className="WHR__result__left">
          <h3>Result</h3>
          <p>
            <span>{result}</span>
          </p>
        </div>
        <div className="WHR__result__right">
          {state.checkedFemale === true && (
            <table>
              <thead>
                <tr>
                  <th>WHR for female</th>
                  <th>Classification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.80 or lower</td>
                  <td
                    style={{
                      backgroundColor: lowRisk,
                    }}
                  >
                    Low health risk
                  </td>
                </tr>
                <tr>
                  <td>0.81 to 0.84</td>
                  <td
                    style={{
                      backgroundColor: mediumRisk,
                    }}
                  >
                    Moderate risk
                  </td>
                </tr>
                <tr>
                  <td>0.85 or higher</td>
                  <td
                    style={{
                      backgroundColor: highRisk,
                    }}
                  >
                    High risk
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          {state.checkedMale && (
            <table>
              <thead>
                <tr>
                  <th>WHR for male</th>
                  <th>Classification</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>0.95 or lower</td>
                  <td style={{ backgroundColor: lowRisk }}>Low health risk</td>
                </tr>
                <tr>
                  <td>0.96 to 1.0</td>
                  <td style={{ backgroundColor: mediumRisk }}>Moderate risk</td>
                </tr>
                <tr>
                  <td>1.0 or higher</td>
                  <td style={{ backgroundColor: highRisk }}>High risk</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
      <p className="WHR__result__text">
        <span style={{ display: displayShape }}> You are Pear shape</span>
        <span style={{ display: displayShape }}> You are Avocado shape</span>
        <span style={{ display: displayShape }}> You are Apple shape</span>
      </p>
    </div>
  );
}

export default WHR;
