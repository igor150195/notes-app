import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import Note2 from "./components/Note2";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Первая заметка", description: "подчеркнул" },
    { id: 2, text: "Вторая заметка" },
    { id: 3, text: "3 заметка" },
  ]);

  const [myNotes, updateNotes] = useState([
    { id: Math.random() * 10, text: "11 заметка" },
    { id: Math.random() * 10, text: "22 заметка" },
    { id: Math.random() * 10, text: "333 заметка" },
    { id: Math.random() * 10, text: "443 заметка" },
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

  const myFunc = (id) => {
    return myNotes.filter((myNote) => myNote.id !== id);
  };

  const deleteNote = (id) => {
    updateNotes(myFunc(id));
  };

  return (
    <div>
      <h1>Notes App</h1>
      <NoteList notes={notes} onDelete={handleDelete} />
      <NoteForm onAdd={handleOnAdd} />
      <br />
      <br />
      <hr />

      {myNotes.map((note) => (
        <Note2
          key={note.id}
          id={note.id}
          text={note.text}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}
