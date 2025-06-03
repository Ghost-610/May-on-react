import React, { useState } from "react";

function ToDoList() {
  const [task, setTask] = useState([
    "Take a walk",
    "Take a shower",
    "Have dinner",
    "Write a code!",
    "Take a break",
  ]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);
  }
  function addTask() {
    if (newTask.trim() !== "") {
      setTask((t) => [...t, newTask]); //updater function from the Previous state to the current state wityhout removing the previous stae
      setNewTask(""); //this clears the input field
    }
  }
  function deleteTask(index) {
    const upDatedTask = task.filter((_, i) => i !== index);
    setTask(upDatedTask);
  }
  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index - 1]] = [
        updatedTask[index - 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }
  function moveTaskDown(index) {
    if (index < task.length - 1) {
      const updatedTask = [...task];
      [updatedTask[index], updatedTask[index + 1]] = [
        updatedTask[index + 1],
        updatedTask[index],
      ];
      setTask(updatedTask);
    }
  }

  return (
    <>
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <div>
          <input
            type="text"
            value={newTask}
            onChange={handleInputChange}
            placeholder="Enter Task here..."
          />
          <button className="add-btn" onClick={addTask}>
            Add Task
          </button>
        </div>
        <ol>
          {task.map((task, index) => (
            <li key={index}>
              <span className="text">{task}</span>
              <button className="delete-btn" onClick={() => deleteTask(index)}>
                Delete
              </button>
              <button className="move-btn" onClick={() => moveTaskUp(index)}>
                Move-Up
              </button>
              <button className="move-btn" onClick={() => moveTaskDown(index)}>
                Move-Down
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}

export default ToDoList;
