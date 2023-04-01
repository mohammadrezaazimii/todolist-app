import React, { useEffect, useRef, useState } from "react";
import styles from "./TodoForm.module.css";
import { TodoActions } from "../TodoApp/TodoApp";

const TodoForm = ({ editingTodo, resetEdit }) => {
  const [todo, setTodo] = useState(editingTodo ? editingTodo.work : "");
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  // console.log(Boolean(editingTodo), editingTodo);
  const { addTodoHandler, onEdit } = TodoActions();
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (!todo) {
      alert("Enter Todo!");
      return;
    }
    if (editingTodo) {
      onEdit(todo, editingTodo.id);
      resetEdit();
    } else {
      addTodoHandler(todo);
    }
    setTodo("");
  };

  return (
    <div>
      <div>
        <form className={styles.container} onSubmit={(e) => onSubmitForm(e)}>
          <input
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            ref={inputRef}
            placeholder={editingTodo ? "Update todo ..." : "Add todo ..."}
          />
          <button type="submit">{editingTodo ? "Update" : "Add"}</button>
        </form>
      </div>
    </div>
  );
};

export default TodoForm;
