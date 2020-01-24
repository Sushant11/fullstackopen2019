import React from 'react';
import { add } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({store}) => {
    const addNew = (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        store.dispatch(add(content))
        e.target.anecdote.value = ''
      }
    return (
        <div>
             <h2>create new</h2>
      <form onSubmit={addNew}>
        <div>
          <input name='anecdote'/>
        </div>
        <button onClick='submit'>create</button>
      </form>
        </div>
    );
};

export default AnecdoteForm;