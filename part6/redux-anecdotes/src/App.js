import React from "react";
import ConnectedForm from "./components/AnecdoteForm";
import ConnectedAnectodeList from "./components/AnecdoteList";
import ConnectedNotification from "./components/Notification";

const App = () => {
  return (
    <div>
      <ConnectedNotification />
      <ConnectedAnectodeList />
      <ConnectedForm />
    </div>
  );
};

export default App;
