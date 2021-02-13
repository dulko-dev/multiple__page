import React from "react";
import TodosElement from "./TodosElement";

const TodoList = ({ todos, setTodos, filteredTodos }) => {
  return (
    <ul
      style={{
        minHeight: "500px",
        width: "500px",
        backgroundColor: "rgba(34, 34, 34, 0.9)",
        padding: "20px 0 5px 30px",
      }}
    >
      {filteredTodos.map((element) => (
        <TodosElement
          key={element.id}
          text={element.text}
          setTodos={setTodos}
          todos={todos}
          element={element}
        />
      ))}
    </ul>
  );
};

export default TodoList;
