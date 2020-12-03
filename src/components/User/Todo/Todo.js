import React, { useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import UserNav from "../UserNav";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [editing, setEditing] = useState(false);

  // useEffect(() => {
  //   getLocalStorage();
  // }, []);

  useEffect(() => {
    filteredHandler();
    // saveLocalStorage();
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((el) => el.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((el) => el.completed === false));
        break;
      default:
        setFilteredTodos(todos);
    }
  };

  // const saveLocalStorage = () => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // };

  // const getLocalStorage = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let localTodo = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(localTodo);
  //   }
  // };

  return (
    <>
      <UserNav />
      <div className="todo">
        <Form className='form'
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
        />
        <TodoList className='todolist'
          filteredTodos={filteredTodos}
          todos={todos}
          setTodos={setTodos}
          setEditing={setEditing}
          editing={editing}
        />
      </div>
    </>
  );
};

export default Todo;
