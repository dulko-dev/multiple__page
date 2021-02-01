import React, { useState } from "react";
import BMI from "./Folders/BMI/BMI";
import BMR from "./Folders/BMR/BMR";
import WHR from "./Folders/WHR/WHR";
import YMCA from "./Folders/YMCA/YMCA";
import Calorie from "./Folders/Calorie/Calorie";

function FitCalc() {
  const [resultBMI, setResultBMI] = useState("");
  const [resultBMR, setResultBMR] = useState("");
  const [resultWHR, setResultWHR] = useState("");
  const [resultYMCA, setResultYMCA] = useState({
    result: "",
    fatMass: "",
    leanMass: "",
  });
  const [resultCalorie, setResultCalorie] = useState("");
  const [bmi, setBmi] = useState(false);
  const [bmr, setBmr] = useState(false);
  const [whr, setWhr] = useState(false);
  const [ymca, setYmca] = useState(false);
  const [calorie, setCalorie] = useState(false);
  const [hidden, setHidden] = useState("block");

  const handleBmi = () => {
    setBmi(true);
    setBmr(false);
    setWhr(false);
    setYmca(false);
    setCalorie(false);
    setHidden("none");
  };
  const handleBmr = () => {
    setBmi(false);
    setBmr(true);
    setWhr(false);
    setYmca(false);
    setCalorie(false);
    setHidden("none");
  };
  const handleWhr = () => {
    setBmi(false);
    setBmr(false);
    setWhr(true);
    setYmca(false);
    setCalorie(false);
    setHidden("none");
  };
  const handleYmca = () => {
    setBmi(false);
    setBmr(false);
    setWhr(false);
    setYmca(true);
    setCalorie(false);
    setHidden("none");
  };
  const handleCalorie = () => {
    setBmi(false);
    setBmr(false);
    setWhr(false);
    setYmca(false);
    setCalorie(true);
    setHidden("none");
  };

  return (
    <div className="fitCalc">
      <h3 className="fitCalc__title">Fit Calculator</h3>
      <div className="fitCalc__calc">
        <div className="fitCalc__folders">
          <span onClick={handleBmi} className={`${bmi && "selected__folder"}`}>
            BMI
          </span>
          <span onClick={handleBmr} className={`${bmr && "selected__folder"}`}>
            BMR
          </span>
          <span onClick={handleWhr} className={`${whr && "selected__folder"}`}>
            WHR
          </span>
          <span
            onClick={handleYmca}
            className={`${ymca && "selected__folder"}`}
          >
            YMCA
          </span>
          <span
            onClick={handleCalorie}
            className={`${calorie && "selected__folder"}`}
          >
            Calorie
          </span>
        </div>
        <div className="fitCalc__wrapperInfo">
          {bmi && <BMI resultBMI={resultBMI} setResultBMI={setResultBMI} />}
          {bmr && <BMR resultBMR={resultBMR} setResultBMR={setResultBMR} />}
          {whr && <WHR resultWHR={resultWHR} setResultWHR={setResultWHR} />}
          {ymca && (
            <YMCA resultYMCA={resultYMCA} setResultYMCA={setResultYMCA} />
          )}
          {calorie && (
            <Calorie
              resultCalorie={resultCalorie}
              setResultCalorie={setResultCalorie}
            />
          )}
          <div style={{ display: `${hidden}` }} className="fitCalc__infoText">
            Select type of Calculator
          </div>
        </div>
      </div>
    </div>
  );
}

export default FitCalc;
