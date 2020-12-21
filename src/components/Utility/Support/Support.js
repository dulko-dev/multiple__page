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
            />
          ) : (
            <i
              className="far fa-question-circle support__sign"
              data-tip="Any problem with dashboard?"
              onClick={handleShowForm}
            ></i>
          )}
          {isSend && (
            <p
              style={{ color: "green", fontSize: "2.5em", textAlign: "center" }}
            >
              Your message has been sent successful
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Support;
