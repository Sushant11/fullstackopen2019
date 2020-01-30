import React from "react";
import { connect } from "react-redux";
import { addVote } from "../reducers/anecdoteReducer";
import { setNotification } from "../reducers/notificationReducer";

const AnecdoteList = props => {
  const initialAnecdotes = props.anecdotes;
  const anecdotes = initialAnecdotes.sort((a, b) => b["votes"] - a["votes"]);

  const vote = id => {
    props.addVote(id);
    const currentAnecdote = props.anecdotes.find(a => a.id === id).content;
    props.setNotification(`You voted "${currentAnecdote}"`, 5);
  };
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
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
  };
};

const mapDispatchToProps = {
  addVote,
  setNotification
};

const ConnectedAnectodeList = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList);
export default ConnectedAnectodeList;
