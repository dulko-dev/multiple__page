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

  const editHandler = () => {
    setEditing(!editing);
  };

  if(editing) {
    return 'Editing'
  }
  return (
    
    <div>
      <input type="checkbox" onChange={completedHandler} value={todos.text}/>
      <li>{text}</li>
      <input onClick={deleteHandler} type="button" value="remove" />
      <input type="button" value="edit" onClick={editHandler} />
    </div>
  );
}

export default TodosElement;
