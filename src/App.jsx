import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Первая заметка", description: "подчеркнул" },
    { id: 2, text: "Вторая заметка" },
    { id: 3, text: "3 заметка" },
  ]);

  const handleDelete = (deleteId) => {
    setNotes(notes.filter((note) => note.id !== deleteId));

    /* старая запись выглядит так
    let test2 = notes.filter(function(note) {
      return note.id !== deleteId
    });*/
  };

  const handleOnAdd = (text) => {
    const newNote = {
      id: Date.now(), // простейший уникальный id
      text: text,
    };
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteList notes={notes} onDelete={handleDelete} />
      <NoteForm onAdd={handleOnAdd} />
    </div>
  );
}
