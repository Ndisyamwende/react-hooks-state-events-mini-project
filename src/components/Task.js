import React from "react";

function Task({ id, text, category, onDeleteTask }) {
  return (
    <div className="task" key={id}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={() => onDeleteTask(id)}>X</button>
    </div>
  );
}

export default Task;
