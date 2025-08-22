import React from "react";
import PropTypes from "prop-types";
import Note2 from "./Note2";

export default function NoteList3({ mynotes, onDelete }) {
  return mynotes.map((note) => (
    <Note2 key={note.id} id={note.id} text={note.text} onDelete={onDelete} />
  ));
}

NoteList3.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
