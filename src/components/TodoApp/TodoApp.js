import React, { useContext, useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodosList from "../TodosList/TodosList";
import { createContext } from "react";

const TodoContext = createContext();
const SetTodoContext = createContext();
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  return (
    <div className={styles.container}>
      <SetTodoContext.Provider value={setTodos}>
        <TodoContext.Provider value={todos}>
          <TodoForm />
          <TodosList todos={todos} />
        </TodoContext.Provider>
      </SetTodoContext.Provider>
    </div>
  );
};
export default TodoApp;
export const useSetTodo = () => useContext(SetTodoContext);

export const TodoActions = () => {
  const todos = useContext(TodoContext);
  const setTodos = useSetTodo();
  const onEdit = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    const editedTodo = { ...todos[index] };
    
  };
  const onCompelete = (id) => {
    const newTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    const compeletedTodo = { ...todos[index] };
    compeletedTodo.isCompeleted = true;
    newTodos[index] = compeletedTodo;
    setTodos(newTodos);
  };
  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      work: todo,
      isCompeleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  return { onEdit, onCompelete, addTodoHandler, todos };
};
