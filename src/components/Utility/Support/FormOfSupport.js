import React, { useContext, useState } from "react";
import { AuthContext } from "../../Firebase/Auth";
// import restApi from "../Support/restApi";

function FormOfSupport({
  state,
  setState,
  handleShowForm,
  setIsSend,
  setError,
}) {
  const { value } = useContext(AuthContext);
  const [user] = value;
  const [errorState, setErrorState] = useState(false);

  const handleName = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    if (state.name === "" || state.text === "") {
      setErrorState(true);
      return;
    }
    setErrorState(false);
    restApi({ user }, state.name, state.text);
    setState({ name: "", text: "" });
    handleShowForm(false);
  };

  const restApi = (email, name, msg) => {
    fetch("https://jsonplaceholder.typicode.com/posts/", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: name,
        msg: msg,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        if (response.ok) {
          setIsSend(true);
          return response;
        } else {
          setIsSend(false);
          setError(true);
        }
      })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  const errorInfo = (
    <span style={{ color: "#ff495c", paddingLeft: "2.5em", fontSize: "1.2em" }}>
      fill name and message
    </span>
  );

  return (
    <>
      <div className="formOfSupport">
        <form onSubmit={handleSubmitForm}>
          <span onClick={handleShowForm} className="formOfSupport__X">
            X
          </span>
          <label className="label label__email">
            <span>email: </span>
            <span>{user}</span>
          </label>
          <label className="label label__name">
            <span>name: </span>
            <input
              type="text"
              value={state.name}
              onChange={handleName}
              name="name"
              autoComplete="off"
            />
          </label>
          <label className="label label__textArea">
            <textarea
              cols="45"
              rows="8"
              onChange={handleName}
              name="text"
              value={state.text}
              placeholder="click on, and let us what happen"
            />
          </label>
          <button type="submit" className="label__button">
            Send
          </button>
          {errorState ? errorInfo : ""}
        </form>
      </div>
      <div className="modal"></div>
    </>
  );
}

export default FormOfSupport;
