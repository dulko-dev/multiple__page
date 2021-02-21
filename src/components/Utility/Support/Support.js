import React, { useEffect, useState } from "react";
import FormOfSupport from "./FormOfSupport";
import ReportProblem from "../../../assets/reportProblem.png";

function Support() {
  const [state, setState] = useState({
    name: "",
    text: "",
  });
  const [isShow, setIsShow] = useState(false);
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState(false);

  const handleShowForm = () => {
    setIsShow(!isShow);
  };

  useEffect(() => {
    const timeId = setTimeout(() => {
      setIsSend(false);
    }, 4000);

    return () => {
      clearTimeout(timeId);
    };
  }, [isSend]);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setError(false);
    }, 4000);

    return () => {
      clearTimeout(timeId);
    };
  }, [error]);

  return (
    <>
      <div className="support">
        <div className="support__divSign">
          {isShow ? (
            <FormOfSupport
              state={state}
              setState={setState}
              handleShowForm={handleShowForm}
              setIsSend={setIsSend}
              setError={setError}
            />
          ) : (
            <img
              src={ReportProblem}
              alt="report problem"
              className="support__sign"
              onClick={handleShowForm}
            />
          )}
          {isSend && (
            <p
              style={{
                position: "fixed",
                left: "50%",
                transform: "translateX(-50%)",
                top: "70px",
                color: "green",
                fontSize: "2.5em",
              }}
            >
              Your message has been sent successful
            </p>
          )}
          {error && (
            <p
              style={{
                position: "fixed",
                left: "50%",
                transform: "translateX(-50%)",
                top: "70px",
                color: "red",
                fontSize: "2.5em",
              }}
            >
              There is some problem with server. Please try again latter
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Support;
