import React, { useState } from "react";
import PropTypes from "prop-types";

export default function NoteForm({ onAdd }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return; // если пусто — не добавляем
    onAdd(text);
    setText(""); // очищаем поле после добавления
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

// PropTypes проверяют типы props
NoteForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
