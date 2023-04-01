import React from "react";
import styles from "./Todo.module.css";
import { TodoActions } from "../TodoApp/TodoApp";
const Todo = ({ todo, setEdit }) => {
  const { onCompelete, onDelete } = TodoActions();

  return (
      <div className={styles.todo_wrapper}>
        <p onClick={() => onCompelete(todo.id)} className={todo.isCompeleted ? styles.compeleted : ""}>
          {todo.work}
        </p>
        <div className={styles.btns_wrapper}>
          <button className={styles.btn } onClick={() => setEdit(todo)}>Edit</button>
          <button className={styles.btn+' '+ styles.delete} onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
      </div>
  
  );
};

export default Todo;
