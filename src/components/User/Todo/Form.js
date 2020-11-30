import React from "react";

const Form = ({ setInputText, setTodos, inputText, todos, setStatus }) => {
  const onChangeHandler = (e) => {
    setInputText(e.target.value);
  };

  const addedHandler = (e) => {
    e.preventDefault();
    if (inputText.trim().length === 0) {
      return;
    }
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);
    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  return (
    <div className="form__inside">
      <h2>Your goals to step forward to better future:</h2>
      <form onSubmit={addedHandler}>
        <input value={inputText} onChange={onChangeHandler} type="text" />
        <button>Add to list</button>
        <select onChange={statusHandler}>
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="uncompleted">uncompleted</option>
        </select>
      </form>
    </div>
  );
};

export default Form;
