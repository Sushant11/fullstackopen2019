import React from 'react'
import Note from './Note'

const App = ({notes}) => {

const Rows = () => notes.map(note => <Note key={note.id} note={note}/>)
    return(
        <div>
            <h3>Notes</h3>
            <ul>
                {Rows()}
            </ul>
        </div>
    )
}

export default App