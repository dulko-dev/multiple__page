import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/Auth";

function FormOfSupport({ name, setName }) {
  const [state, setState] = useState({
    name: "",
    text: "",
  });

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
  };

  return (
    <div className="formOfSupport">
      <form onSubmit={handleSubmit(handleSubmitForm)}>
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
