import React, { useState } from "react";

import { TodoActions } from "../TodoApp/TodoApp";
import Select from "react-select";
import styles from "./Navbar.module.css";
const TodoHeader = ({ filter,selectChangeHandler }) => {
  const filterOptions = [
    { value: "all", label: "All" },
    { value: 'uncompeleted', label: "Uncompeleted" },
    { value:'compeleted' , label: "Compeleted" },
  ];
  const { todos } = TodoActions();
  const unCompeletedTodos = todos.filter(
    (todo) => todo.isCompeleted === false
  ).length;
  // if (!unCompeletedTodos)
  //   return <h3 className={styles.container}>Set your today todos!</h3>;
  return (
    <div className={styles.container}>
      <h3 className={styles.todo_header}>
        unCompeleted Todos:
        <span className={styles.uncompeleted_todo}>{unCompeletedTodos}</span>
      </h3>
      <Select
        options={filterOptions}
        value={filter}
        onChange={selectChangeHandler}
      />
    </div>
  );
};

export default TodoHeader;
