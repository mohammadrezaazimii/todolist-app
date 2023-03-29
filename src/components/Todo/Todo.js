import React from "react";
import styles from "./Todo.module.css";
import { TodoActions } from "../TodoApp/TodoApp";
const Todo = ({ todo }) => {
  const { onEdit, onCompelete } = TodoActions();
  return (
    <div>
      <div className={styles.todo_wrapper}>
        <p>{todo.work}</p>
        <div>
          <button onClick={() => onEdit(todo.id)}>Edit</button>
          <button onClick={() => onCompelete(todo.id)}>Compeleted</button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
