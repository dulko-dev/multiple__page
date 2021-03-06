import React, { useContext, useEffect, useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import UserNav from "../../User/UserNav";
import { db } from "../../Firebase/firebaseConfig";
import { AuthContext } from "../../Firebase/Auth";
import fire from "../../Firebase/firebaseConfig";
import bg from "../../../assets/todo-background.jpg";
import bgWeb from "../../../assets/webP/todo-background.webp";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");

  const { userId } = useContext(AuthContext);
  const id = userId;

  // useEffect(() => {
  //   getLocalStorage();
  // }, []);

  useEffect(() => {
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
    filteredHandler();
    // saveLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos, status]);

  useEffect(() => {
    db.collection("todos")
      .where("id", "==", fire.auth().currentUser.uid)
      .orderBy("text", "desc")
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((docs) => ({
            id: docs.id,
            text: docs.data().text,
            completed: docs.data().completed,
          }))
        );
      });
  }, []);


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
        <picture>
          <source srcSet={bgWeb} type="image/webp" />
          <source srcSet={bg} type="image/jpg" />
          <img
            src={bg}
            alt="background"
            style={{
              position: "fixed",
              width: "100%",
              height: "100%",
              left: "0",
              bottom: "0",
              zIndex: "-1",
            }}
          />
        </picture>
        <Form
          className="form"
          inputText={inputText}
          setInputText={setInputText}
          todos={todos}
          setTodos={setTodos}
          setStatus={setStatus}
          id={id}
        />
        <div>
          <h2 className="todolist__title">Your list of task: </h2>
          <TodoList
            filteredTodos={filteredTodos}
            todos={todos}
            setTodos={setTodos}
          />
        </div>
      </div>
    </>
  );
};

export default Todo;
