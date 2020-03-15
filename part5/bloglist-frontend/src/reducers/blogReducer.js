/* eslint-disable no-case-declarations */
import blogService from "../services/blogs";


export const reducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_BLOGS":
      return action.data;
    case "ADD_BLOG":
      const blog = action.data.blog;
      return [...state, blog];
    default:
      return state;
  }
};

export const initBlogs = () => {
  return async dispatch => {
    const blogs = await blogService.getAll();
    dispatch({
      type: "FETCH_BLOGS",
      data: blogs
    });
  };
};

export const addBlog = (blogObject) => {
  return async (dispatch) => {
      // const addedBog = await blogService.create(blogObject);
      dispatch({
          type : 'ADD',
          data : { blog: blogObject }
      });
  };
};


export default reducer;