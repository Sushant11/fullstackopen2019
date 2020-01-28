import React from "react";
import {connect} from 'react-redux'
import { add } from "../reducers/anecdoteReducer";
import { newAnecdote } from "../reducers/notificationReducer";

const AnecdoteForm = (props) => {
  const addNew = e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    props.add(content);
    props.newAnecdote(`Added : "${content}`);
    e.target.anecdote.value = "";
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div>
          <input name="anecdote" />
        </div>
        <button onClick="submit">create</button>
      </form>
    </div>
  );
};


const mapDispatchToProps = {
  add, newAnecdote
}

const ConnectedForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedForm;
