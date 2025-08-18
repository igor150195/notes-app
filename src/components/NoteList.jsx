import React from "react";
import Note from "./Note";
import PropTypes from "prop-types";

export default function NoteList({ notes, onDelete }) {
  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          description={note.description}
          id={note.id}
          text={note.text}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

NoteList.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
