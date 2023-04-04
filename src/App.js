import styles from "./App.module.css";
import "./general.css";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <div className={styles.App}>
      <h2 className={styles.title}>To Do App - Mohammadreza Azimi</h2>
      <TodoApp />
    </div>
  );
}

export default App;
