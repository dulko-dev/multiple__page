import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/Auth";
import restApi from "../Support/restApi";

function FormOfSupport({ state, setState, handleShowForm, setIsSend }) {
  
  const { value } = useContext(AuthContext);
  const [user, setUser] = value;
  const { register, handleSubmit } = useForm();

  const handleName = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    restApi({ user }, state.name, state.text);
    setState({ name: "", text: "" });
    handleShowForm(false);
    setIsSend(true);
  };


  return (
    <div className="formOfSupport">
      <form onSubmit={handleSubmitForm}>
        <span onClick={handleShowForm} className="formOfSupport__X">
          X
        </span>
        <label className="label">
          <span>email</span>
          <span>{user}</span>
        </label>
        <label className="label">
          <span>Name</span>
          <input
            type="text"
            value={state.name}
            onChange={handleName}
            name="name"
          />
        </label>
        <label className="label">
          <textarea
            cols="30"
            rows="5"
            onChange={handleName}
            name="text"
            value={state.text}
            placeholder="Please, let us know what happen"
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default FormOfSupport;
