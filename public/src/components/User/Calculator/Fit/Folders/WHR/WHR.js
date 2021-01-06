import React from "react";

function WHR() {
  return (
    <div className="WHR">
      <h3 className="WHR__title">Calculate your Waist to Hip Ratio</h3>
      <form>
        <span>Gender: </span>
        <input type="radio" value="female" id="female" name="gender" />
        <label htmlFor="female" className="WHR__gender">
          Female
        </label>
        <input type="radio" value="male" id="male" name="gender" />
        <label htmlFor="male" className="WHR__gender">
          Male
        </label>

        <label className="WHR__label">
          <div>Waist [cm]</div>
          <input type="number" />
          <span></span>
        </label>
        <label className="WHR__label">
          <div>Hip [cm]</div>
          <input type="number" />
          <span></span>
        </label>
        <div className="WHR__button">
          <button type="submit">Calculate</button>
          <button>Clear</button>
        </div>
      </form>
      <div className="WHR__result">
        <div className="WHR__result__left">
          <h3>Result</h3>
          <p>
            <span>1.2</span>
          </p>
        </div>
        <div className="WHR__result__right">
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
                <td>Low health risk</td>
              </tr>
              <tr>
                <td>0.81 to 0.84</td>
                <td>Moderate risk</td>
              </tr>
              <tr>
                <td>0.85 or higher</td>
                <td>High risk</td>
              </tr>
            </tbody>
          </table>
          <table style={{ display: "none" }}>
            <thead>
              <tr>
                <th>WHR for male</th>
                <th>Classification</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.95 or lower</td>
                <td>Low health risk</td>
              </tr>
              <tr>
                <td>0.96 to 1.0</td>
                <td>Moderate risk</td>
              </tr>
              <tr>
                <td>1.0 or higher</td>
                <td>High risk</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className='WHR__result__text'>You are Pear, Avodaco, Apple shape </p>
    </div>
  );
}

export default WHR;
