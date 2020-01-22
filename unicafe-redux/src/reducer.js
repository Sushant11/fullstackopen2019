const initialState = {
  good: 0,
  ok: 0,
  bad: 0
};

const counterReducer = (state = initialState, action) => {
  console.log(action);
  console.log("state :", state);
  // eslint-disable-next-line default-case
  switch (action.type) {
    case "GOOD":
      return [...state, state.good];
    case "OK":
      return state;
    case "BAD":
      return state;
    case "ZERO":
      return state;
  }
  return state;
};

export default counterReducer;
