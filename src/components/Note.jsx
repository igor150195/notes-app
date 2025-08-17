import React from "react";
import PropTypes from "prop-types";

export default function Note({ id, text, onDelete }) {
  const handleDelete = () => onDelete(id, text);
  return (
    <li>
      <span>{text}</span>
      <button onClick={handleDelete}>Удалить</button>
    </li>
  );
}

// PropTypes проверяют типы props
Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
