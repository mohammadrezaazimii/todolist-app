import { render } from "@testing-library/react";
import React from "react";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

const TodosList = ({ todos }) => {
  const renderHandler = () => {
    if (todos.length === 0) return <div>Please Add Some Todos</div>;
    return (
      <div className={styles.todos_container}>
        {todos.map((todo, index) => (
          <Todo key={todo.id} todo={todo}/>
        ))}
      </div>
    );
  };
  return <div>{renderHandler()}</div>;
};

export default TodosList;
