import { render } from "@testing-library/react";
import React, { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";
import styles from "./TodoList.module.css";
import { TodoActions } from "../TodoApp/TodoApp";
const TodosList = ({ todos }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompeleted: false });
  const resetEdit = () => {
    setEdit({ id: null, text: "", isCompeleted: false });
  };
  const renderHandler = () => {
    if (todos.length === 0) return <div>Please Add Some Todos</div>;
    return (
      <div>
        {edit.id ? (
          <TodoForm editingTodo={edit} resetEdit={resetEdit} />
        ) : (
          <div className={styles.todos_container}>
            {todos.map((todo, index) => (
              <Todo key={todo.id} todo={todo} setEdit={setEdit} />
            ))}
          </div>
        )}
      </div>
    );
  };
  return <div>{renderHandler()}</div>;
};

export default TodosList;
