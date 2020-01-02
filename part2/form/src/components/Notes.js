import React, { useState } from "react";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("New Note..");

  const rows = () => notes.map(note => <li key={note.id}>{note}</li>);

  const addNote = (event) => {
    event.preventDefault()  
    setNotes(notes.concat(newNote))
    setNewNote('')
  }

  const handleNoteChange = e => {
    setNewNote(e.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>{rows()}</ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Notes;
