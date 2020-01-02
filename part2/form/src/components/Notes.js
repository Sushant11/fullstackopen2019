import React, { useState, useEffect } from "react";
import Note from "./Note";
import noteService from '../services/note'

const Notes = props => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

  const addNote = event => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() > 0.5,
      id: notes.length + 1,
    }
    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
      })
  };

  const toggleImportanceOf = id => {
  const note = notes.find(n => n.id === id)
  const changedNote = { ...note, important: !note.important }

  noteService
  .update(id, changedNote)
  .then(returnedNote => {
    setNotes(notes.map(note => note.id !== id ? note : returnedNote))
  })

}

  const handleNoteChange = e => {
    setNewNote(e.target.value);
  };

  const rows = () => notes.map(note =>
    <Note
      key={note.id}
      note={note}
      toggleImportance={() => toggleImportanceOf(note.id)}
    />
  )

  return (
    <div>
      <h1>Notes</h1>
     {rows()}
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} placeholder=""/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default Notes;
