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
          <h2 className={styles.title}>To Do App</h2>
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
  const onEdit = (editedTodo , id) => {
    const updatedTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.work = editedTodo;
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const onCompelete = (id) => {
    const updatedTodos = [...todos];
    const index = todos.findIndex((todo) => todo.id === id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompeleted = !selectedTodo.isCompeleted;
    updatedTodos[index] = selectedTodo;
    setTodos(updatedTodos);
  };
  const onDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };
  const addTodoHandler = (todo) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      work: todo,
      isCompeleted: false,
    };
    setTodos([...todos, newTodo]);
  };
  return { onCompelete, addTodoHandler, onDelete, onEdit, setTodos, todos };
};
