import React from "react";
import { vote } from "../reducers/anecdoteReducer";

const AnecdoteList = ({ store }) => {
    const anecdotes = store.getState()
  const votes = id => {
    store.dispatch(vote(id));
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => votes(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
