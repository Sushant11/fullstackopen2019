const initialState = "No Notificaiton";

const notificationReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "VOTE_NOTIFY":
      return action.notification;
    case "NEW_ANECDOTE":
      return action.notification
  }
  return state
};

export const voteNotify = notification => {
  return ({
    type: "VOTE_NOTIFY",
    notification 
  });
};

export const noNotification = () => {
  return{
    type: "EMPTY",
    notification: null
  }
};

export const newAnecdote = (content) => {
  return {
    type: "NEW_ANECDOTE",
    notification: content
  }
}

export default notificationReducer;
