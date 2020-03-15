/* eslint-disable no-case-declarations */
import userService from "../services/login";


export const reducer = (state = [], action) => {
  console.log('action :', action);
  switch (action.type) {
    case 'LOGIN':
      return action.data;
    default:
      return state;
  }
};


export const login = (user) => {
  return async (dispatch) => {
      const newUser = await userService.login(user);
      dispatch({
          type : 'LOGIN',
          data : newUser
      });
  };
};


export default reducer;