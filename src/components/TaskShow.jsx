import React, { useContext, useState } from "react";
import TaskCreate from "./TaskCreate";
import TaskContext from "../context/task";

const TaskShow = ({ task }) => {
  const { editTaskById, deleteTaskById } = useContext(TaskContext);

  const [showUpdate, setShowUpdate] = useState(false);

  const handleDeleteTask = () => {
    //onDelete(task.id);
    deleteTaskById(task.id);
  };

  const handleUpdateTask = () => {
    setShowUpdate(true);
  };

  const handleSubmit = (id, updatedTaskTitle, updatedTaskDesc) => {
    setShowUpdate(false);
    //onUpdate(id, updatedTaskTitle, updatedTaskDesc);
    editTaskById(id, updatedTaskTitle, updatedTaskDesc);
  };

  return (
    <div className="task-show">
      {showUpdate ? (
        <TaskCreate task={task} taskIsUpdate={true} onUpdate={handleSubmit} />
      ) : (
        <div>
          <h3 className="task-title title is-4">Your Job</h3>
          <p>{task.taskTitle}</p>
          <h3 className="task-title title is-4">Things to do</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button
              className="button is-danger is-rounded"
              onClick={handleDeleteTask}
            >
              Delete
            </button>
            <button
              className="button is-info is-rounded"
              onClick={handleUpdateTask}
            >
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaskShow;
