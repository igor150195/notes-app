import React from "react";
import PropTypes from "prop-types";

export default function Note({ id, text, description, onDelete }) {
  const handleDelete = () => onDelete(id, text);
  return (
    <li>
      <span>{text}</span> <ins>{description}</ins>
      <button onClick={handleDelete}>Удалить</button>
    </li>
  );
}

// PropTypes проверяют типы props
Note.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
