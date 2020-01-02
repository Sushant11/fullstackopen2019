import React, { useState } from "react";

const Notes = props => {
  console.log('props.notes :', props.notes);
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("New Note..");

  const rows = () => notes.map(note => <li key={note.id}>{note.content}</li>);

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    setNotes(notes.concat(noteObject));
    setNewNote("");
  };

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
