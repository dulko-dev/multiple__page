import React from "react";
import { db } from "../../Firebase/firebaseConfig";

const Form = ({ setInputText, setTodos, inputText, todos, setStatus, id }) => {
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addedHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      return;
    }

    console.log(id);

    db.collection("todos").add({
      text: inputText,
      completed: false,
      id: id,
    });
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="form__inside">
      <form onSubmit={addedHandler}>
        <div className="form__group">
          <input
            onChange={onChangeHandler}
            value={inputText}
            type="text"
            className="form__field"
            id="task"
            required
            autoComplete="off"
          />
          <label htmlFor="task" className="form__label">
            <span className="form__name">Add task </span>
          </label>
        </div>
        <button
          className="form__button"
          type="submit"
        >
          Add to list
        </button>
        <select onChange={statusHandler} className="form__select">
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
