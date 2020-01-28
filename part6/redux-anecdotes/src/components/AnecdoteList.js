import React from "react";
import {connect} from 'react-redux'
import { vote } from "../reducers/anecdoteReducer";
import { voteNotify } from "../reducers/notificationReducer"

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes
  const votes = (id,content) => {
    props.vote(id);
    props.voteNotify(`Voted : "${content}`)
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => votes(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    anecdotes: state.anecdotes,
    notification: state.notification
  }
}

const mapDispatchToProps = {
  vote, voteNotify
}

const ConnectedAnectodeList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnectodeList;
