import React, { useEffect, useState } from "react";
import FormOfSupport from "./FormOfSupport";
import ReactTooltip from "react-tooltip";

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
      <ReactTooltip border effect="float" />
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
            <i
              className="far fa-question-circle support__sign"
              data-tip="Have you get problem with dashboard?"
              onClick={handleShowForm}
            ></i>
          )}
          {isSend && (
            <p
              style={{
                color: "green",
                fontSize: "2.5em",
                textAlign: "center",
              }}
            >
              Your message has been sent successful
            </p>
          )}
          {error && (
            <p
              style={{
                color: "red",
                fontSize: "2.5em",
                textAlign: "center",
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
