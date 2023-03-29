import styles from "./App.module.css";
import "./general.css";
import TodoApp from "./components/TodoApp/TodoApp";

function App() {
  return (
    <div className={styles.App}>
      <TodoApp />
    </div>
  );
}

export default App;
