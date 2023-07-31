import { useTitle } from "ahooks";
import List from "./pages/List";
import styles from "./App.module.scss";

function App() {
  useTitle("Survey FE");

  return (
    <div className={styles.App}>
      <h1 style={{ background: "yellow" }}>Survey FE</h1>
      <List />
    </div>
  );
}

export default App;
