import React, { useState } from "react";
import NoteList from "./components/NoteList";
import NoteList2 from "./components/NoteList2";
import NoteForm from "./components/NoteForm";
import NoteForm2 from "./components/NoteForm2";
import Note2 from "./components/Note2";
import NoteList3 from "./components/NoteList3";
import NoteList4 from "./components/NoteList4";

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

  const [newNotes, refreshNotes] = useState([
    { id: Math.random() * 11, text: "11 заметка" },
    { id: Math.random() * 12, text: "22 заметка" },
    { id: Math.random() * 13, text: "333 заметка" },
    { id: Math.random() * 14, text: "444444 заметка" },
    { id: Math.random() * 14, text: "555555 заметка" },
  ]);

  const [thirdNotes, refreshThirdNotes] = useState([
    { id: Math.random() * 11231, text: "! заметка" },
    { id: Math.random() * 5453, text: "@ заметка" },
    { id: Math.random() * 66, text: "# заметка" },
    { id: Math.random() * 114, text: "$ заметка" },
    { id: Math.random() * 444, text: "% заметка" },
  ]);

  const [tasks, setTask] = useState([
    { id: Math.random() * Date.now(), text: "Задача 1" },
    { id: Math.random() * Date.now(), text: "Задача 2" },
    { id: Math.random() * Date.now(), text: "Задача 3" },
    { id: Math.random() * Date.now(), text: "Задача 4" },
    { id: Math.random() * Date.now(), text: "Задача 5" },
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

  const newDelete = (id) => {
    refreshNotes(newNotes.filter((note) => id != note.id));
  };

  const thirdDelete = (id) => {
    refreshThirdNotes(thirdNotes.filter((note) => note.id != id));
  };

  const upDateTask = (id) => {
    setTask(tasks.filter((task) => id != task.id));
  };

  const handleOnAdd2 = (text) => {
    const newTask = {
      id: Math.random() * Date.now(),
      text: text,
    };

    setTask([...tasks, newTask]);
  };

  return (
    <div className="notes-app">
      <h1>Notes App</h1>
      <div className="notes-app__list">
        <div className="notes-app__list-item">
          <NoteList notes={notes} onDelete={handleDelete} />
          <NoteForm onAdd={handleOnAdd} />
        </div>

        <div className="notes-app__list-item">
          {myNotes.map((note) => (
            <Note2
              key={note.id}
              id={note.id}
              text={note.text}
              onDelete={deleteNote}
            />
          ))}
        </div>

        <div className="notes-app__list-item">
          <NoteList2 notes={newNotes} onDelete={newDelete} />
        </div>

        <div className="notes-app__list-item">
          <NoteList3 mynotes={thirdNotes} onDelete={thirdDelete} />
        </div>

        <div className="notes-app__list-item">
          <NoteList4 tasks={tasks} deleteTask={upDateTask} />
          <NoteForm2 onAdd={handleOnAdd2} />
        </div>
      </div>
    </div>
  );
}
