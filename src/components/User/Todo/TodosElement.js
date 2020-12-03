import React from "react";

function TodosElement({ element, setTodos, todos, text, setEditing, editing }) {
  
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== element.id));
  };

  const completedHandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === element.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }
        return el;
      })
    );
  };

  return (
    <div className="todosElement">
      <li
        className={`todosElement__input ${
          element.completed ? "input__done" : ""
        }`}
      >
        {text}
      </li>
      <div>
        <button onClick={completedHandler}>
          <i className="far fa-check-circle"></i>
        </button>
        <button onClick={deleteHandler}>
          <i className="far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  );
}

export default TodosElement;
