import React from "react";
import { db } from "../../Firebase/firebaseConfig";

const Form = ({ setInputText, setTodos, inputText, todos, setStatus }) => {
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addedHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      return;
    }

    db.collection("todos").doc().set({
      text: inputText,
      completed: false,
    });

    // db.collection('todos').add({
    //   text: inputText,
    //   completed: false,
    // })
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="form__inside">
      <h2>
        <span>Your goals to step forward</span>
        <span>to the better future: </span>
      </h2>
      <form onSubmit={addedHandler}>
        <div className="form__group field">
          <input
            onChange={onChangeHandler}
            value={inputText}
            type="text"
            className="form__field"
            placeholder="Add task"
            id="task"
            required
          />
          <label htmlFor="task" className="form__label">
            Add task
          </label>
        </div>
        <button className="form__button">Add to list</button>
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
