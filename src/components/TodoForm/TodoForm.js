import React, { useState } from "react";
import styles from "./TodoForm.module.css";
import { TodoActions } from "../TodoApp/TodoApp";

const TodoForm = () => {
  const { todos } = TodoActions();
  console.log(todos);
  const [todo, setTodo] = useState("");
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Enter Todo!");
      return;
    }
    // addTodoHandler(todo);
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmitForm(e)}>
        <h2 className={styles.title}>To Do App</h2>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default TodoForm;
