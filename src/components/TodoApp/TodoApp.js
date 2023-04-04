import React, { useContext, useEffect, useState } from "react";
import styles from "./TodoApp.module.css";
import TodoForm from "../TodoForm/TodoForm";
import TodosList from "../TodosList/TodosList";
import Navbar from "../Navbar/Navbar";
import { createContext } from "react";

const TodoContext = createContext();
const SetTodoContext = createContext();
const FilteredTodoContext = createContext();
const SetFilteredTodosContext = createContext();
const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    onFilterTodos(filter.value);
  }, [todos, filter]);

  const onFilterTodos = (filter) => {
    switch (filter) {
      case "compeleted":
        setFilteredTodos(todos.filter((todo) => todo.isCompeleted));
        break;
      case "uncompeleted":
        setFilteredTodos(todos.filter((todo) => !todo.isCompeleted));
        break;
      default:
        setFilteredTodos(todos);
    }
  };
  const selectChangeHandler = (value) => {
    setFilter(value);
  };
  return (
    <div className={styles.container}>
      <SetTodoContext.Provider value={setTodos}>
        <TodoContext.Provider value={todos}>
          <FilteredTodoContext.Provider value={filteredTodos}>
            <SetFilteredTodosContext.Provider value={setFilteredTodos}>
              <Navbar
                filter={filter}
                selectChangeHandler={selectChangeHandler}
              />
              <TodoForm />
              <TodosList todos={filteredTodos} />
            </SetFilteredTodosContext.Provider>
          </FilteredTodoContext.Provider>
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
  const filteredTodos = useContext(FilteredTodoContext);
  const setFilteredTodos = useContext(SetFilteredTodosContext);
  const onEdit = (editedTodo, id) => {
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
    setFilteredTodos([...filteredTodos, newTodo]);
  };
  return {
    onCompelete,
    addTodoHandler,
    onDelete,
    onEdit,
    setTodos,
    todos,
  };
};
