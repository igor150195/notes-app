import React from "react";
import PropTypes from "prop-types";
export default function NoteList4({ tasks, deleteTask }) {
  const updTask = (id) => {
    deleteTask(id);
  };

  return tasks.map((task) => (
    <div key={task.id} id={task.id} onClick={() => updTask(task.id)}>
      {task.text}
    </div>
  ));
}

// PropTypes проверяют типы props
NoteList4.propTypes = {
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
