import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TaskContext from "./context/task";

function App() {
  const { fetchTasks } = useContext(TaskContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  // TaskCreate ---> App ----> TaskList
  return (
    <div className="App">
      <section className="hero is-warning">
        <div className="hero-body">
          <p className="title" style={{ textAlign: "center" }}>
            ToDo App
          </p>
        </div>
      </section>
      <TaskCreate />
      <h1>My Jobs</h1>
      <TaskList />
    </div>
  );
}

export default App;
