import React, { useEffect } from "react";
import { connect } from "react-redux";
import ConnectedForm from "./components/AnecdoteForm";
import ConnectedAnectodeList from "./components/AnecdoteList";
import ConnectedNotification from "./components/Notification";
import { initAnecdotes } from "./reducers/anecdoteReducer";

const App = props => {
  useEffect(() => {
    props.initAnecdotes();
  }, [props]);
  return (
    <div>
      <ConnectedNotification />
      <ConnectedAnectodeList />
      <ConnectedForm />
    </div>
  );
};

export default connect(null, { initAnecdotes })(App);
