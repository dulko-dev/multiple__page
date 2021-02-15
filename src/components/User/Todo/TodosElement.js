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
              style={{
                backgroundColor: "inherit",
                borderBottom: "1px solid white",
                border: "none",
                color: "white",
              }}
              value={inputField}
              onChange={(e) => setInputField(e.target.value)}
            />
            <button
              onClick={cancelInputHandler}
              style={{ backgroundColor: "inherit", color: "white" }}
            >
              <i className="far fa-window-close"></i>
            </button>
            <button
              onClick={saveInputHandler}
              style={{ backgroundColor: "inherit", color: "white" }}
            >
              <i className="far fa-check-square"></i>
            </button>
          </div>
        ) : (
          <div className="todosElement__list">
            <div>{text} </div>
            <div className="todosElement__btn">
              <button onClick={completedHandler} className="all__btn">
                <i className="far fa-check-circle"></i>
              </button>
              <button onClick={deleteHandler} className="all__btn">
                <i className="far fa-trash-alt"></i>
              </button>
              <button onClick={openInputHandler} className="all__btn">
                <i className="far fa-edit"></i>
              </button>
            </div>
          </div>
        )}
      </li>
    </div>
  );
}

export default TodosElement;
