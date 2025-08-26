import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NoteForm2({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(text);

    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Добавить</button>
    </form>
  );
}

// PropTypes проверяют типы props
NoteForm2.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
