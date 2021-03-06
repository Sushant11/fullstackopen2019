import React from 'react';

const Note = ({ note, toggleImportance }) => {
    const label = note.important
      ? 'make not important' : 'make important'
  // const rows = () => notes.map(note => <li key={note.id}>{note.content}</li>);
    return (
        <li>
        {note.content} 
        <button onClick={toggleImportance}>{label}</button>
      </li>
    )
    }

export default Note;