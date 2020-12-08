import React from "react";
import { db } from "../../Firebase/firebaseConfig";

function TodosElement({ element, setTodos, todos, text }) {
  const deleteHandler = () => {
    db.collection("todos")
      .doc(element.id)
      .delete()
      // .then(alert("wykasowano pomyślnie"))
      .catch((err) => console.log(err));
  };

  const completedHandler = async () => {
    db.collection("todos").doc(element.id).update({
      completed: !element.completed,
    });

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
