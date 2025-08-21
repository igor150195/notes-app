import React from "react";
import PropTypes from "prop-types";
import Note2 from "./Note2";

export default function NoteList2({ notes, onDelete }) {
  return notes.map((note) => (
    <Note2 key={note.id} id={note.id} text={note.text} onDelete={onDelete} />
  ));
}

// PropTypes проверяют типы props
NoteList2.propTypes = {
  notes: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
