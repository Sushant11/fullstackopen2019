/* eslint-disable default-case */
import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = [];

const getId = () => (100000 * Math.random()).toFixed(0);

export const vote = id => {
  return {
    type: "Vote",
    data: { id }
  };
};

export const add = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: "Add",
      data: newAnecdote
    })
  }
};

const asObject = anecdote => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  };
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll();
    console.log('anecdotes :', anecdotes);
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    });
  };
};

const initialState = anecdotesAtStart.map(asObject);

const anecdoteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "Vote":
      const id = action.data.id;
      const anecdoteToChange = state.find(n => n.id === id);
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      };
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      );

    case "Add":
      //  return state.concat(action.data)
      const newAnecdote = asObject(action.data.content);
      return [...state, newAnecdote];

    case "INIT_ANECDOTES":
      return action.data;
  }

  return state;
};

export default anecdoteReducer;
