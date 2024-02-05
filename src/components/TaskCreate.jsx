import React, { useContext } from "react";
import { useState } from "react";
import TaskContext from "../context/task";

const TaskCreate = ({ task, taskIsUpdate, onUpdate }) => {
  const { editTaskById, createTask } = useContext(TaskContext);

  const [taskTitle, setTaskTitle] = useState(task ? task.taskTitle : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  const handleTitleChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleDescChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (taskIsUpdate) onUpdate(task.id, taskTitle, taskDesc);
    else createTask(taskTitle, taskDesc);
    setTaskTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskIsUpdate ? (
        <div className="task-update">
          <h3>Please Update Task</h3>
          <form className="task-form">
            <label className="task-label">Edit Title</label>
            <input
              value={taskTitle}
              type="text"
              onChange={handleTitleChange}
              className="task-input"
              placeholder="Edit Title"
            />

            <label className="task-label">Edit Task</label>
            <div className="control">
              <textarea
                value={taskDesc}
                onChange={handleDescChange}
                className="task-input"
                placeholder="Doodle Something..."
              />
            </div>

            <button
              onClick={handleSubmit}
              className="task-button update-button"
            >
              Edit
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add Task</h3>
          <form className="task-form">
            <div className="control">
              <input
                value={taskTitle}
                type="text"
                onChange={handleTitleChange}
                className="input is-focused"
                placeholder="Please, Enter the Title"
              />
            </div>

            <label className="task-label">Add Task</label>
            <div className="field">
              <div className="control">
                <textarea
                  value={taskDesc}
                  onChange={handleDescChange}
                  className="textarea is-large"
                  placeholder="Doodle Something..."
                />
              </div>
            </div>

            <button onClick={handleSubmit} className="task-button">
              Create
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TaskCreate;
