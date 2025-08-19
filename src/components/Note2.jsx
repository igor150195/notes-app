import React from "react";
import PropTypes from "prop-types";

export default function Note2({ id, text, onDelete }) {
  const handleDelete = () => onDelete(id, text);
  return (
    <div>
      <span>{text}</span>
      <button onClick={handleDelete}>Удалить</button>
    </div>
  );
}

// PropTypes проверяют типы props
Note2.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
