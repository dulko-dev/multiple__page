import React from "react";
import TodosElement from "./TodosElement";

const TodoList = ({
  todos,
  setTodos,
  filteredTodos,
}) => {
  return (
    <div>
      <ul>
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
    </div>
  );
};

export default TodoList;
