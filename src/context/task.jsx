import { createContext } from "react";
import axios from "axios";
import { useState } from "react";

const TaskContext = createContext();

function Provider({ children }) {
  const [tasks, setTasks] = useState([]);
  const CREATE_URL = "http://localhost:3000/tasks";

  const deleteTaskById = async (id) => {
    await axios.delete(`${CREATE_URL}/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = async (id, updatedTaskTitle, updatedTaskDesc) => {
    await axios.put(`${CREATE_URL}/${id}`, {
      taskTitle: updatedTaskTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, taskTitle: updatedTaskTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const createTask = async (taskTitle, taskDesc) => {
    const response = await axios.post(CREATE_URL, {
      taskTitle,
      taskDesc,
    });
    setTasks([...tasks, response.data]);
  };

  const fetchTasks = async () => {
    const response = await axios.get(CREATE_URL);
    setTasks(response.data);
  };

  const sharedValuesAndFuncs = {
    tasks,
    createTask,
    fetchTasks,
    editTaskById,
    deleteTaskById,
  };

  return (
    <TaskContext.Provider value={sharedValuesAndFuncs}>
      {children}
    </TaskContext.Provider>
  );
}

export { Provider };

export default TaskContext;
