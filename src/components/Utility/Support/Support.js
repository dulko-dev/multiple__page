import React, { useState } from "react";
import FormOfSupport from "./FormOfSupport";

function Support() {
  const [name, setName] = useState("");
  return (
    <div className="support">
      <div className="support__divSign">
        {/* <i className="far fa-question-circle support__sign"></i> */}
        <FormOfSupport setName={setName} name={name} />
      </div>
    </div>
  );
}

export default Support;
