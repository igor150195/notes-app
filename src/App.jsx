import React from "react";
import NoteList from "./components/NoteList";

const notes = [
  { id: 1, text: "Первая заметка" },
  { id: 2, text: "Вторая заметка" },
  { id: 3, text: "3 заметка" },
];

const handleDelete = (id, text) => {
  alert(`Удалить заметку с id ${id} с текстом ${text}`);
};

console.log(1);

export default function App() {
  return (
    <div>
      <h1>Notes App</h1>
      <NoteList notes={notes} onDelete={handleDelete} />
    </div>
  );
}
