import React, { useState } from "react";
import { db } from "../../Firebase/firebaseConfig";

function TodosElement({ element, setTodos, todos, text }) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputField, setInputField] = useState("");

  const deleteHandler = async () => {
    await db
      .collection("todos")
      .doc(element.id)
      .delete()
      // .then(alert("wykasowano pomyślnie"))
      .catch((err) => console.log(err));
  };

  const completedHandler = async () => {
    await db.collection("todos").doc(element.id).update({
      completed: !element.completed,
    });
  };

  const openInputHandler = () => {
    setIsEdit(true);
    setInputField(text);
  };

  const saveInputHandler = () => {
    setIsEdit(false);
    if (inputField.trim().length === 0) {
      return;
    }
    db.collection("todos").doc(element.id).update({
      text: inputField,
    });
  };

  const cancelInputHandler = () => {
    setIsEdit(false);
  };

  return (
    <div className="todosElement">
      <li
        className={`todosElement__input ${
          element.completed ? "input__done" : ""
        }`}
      >
        {isEdit ? (
          <div>
            <input
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
            />
            <button onClick={cancelInputHandler}>
              <i className="far fa-window-close"></i>
            </button>
            <button onClick={saveInputHandler}>
              <i className="far fa-check-square"></i>
            </button>
          </div>
        ) : (
          <>
            <span>{text} </span>
            <button onClick={completedHandler}>
              <i className="far fa-check-circle"></i>
            </button>
            <button onClick={deleteHandler}>
              <i className="far fa-trash-alt"></i>
            </button>
            <button onClick={openInputHandler}>
              <i className="far fa-edit"></i>
            </button>
          </>
        )}
      </li>
    </div>
  );
}

export default TodosElement;
