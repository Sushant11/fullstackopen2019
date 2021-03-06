import React, { useState, useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import { initBlogs, addBlog } from './reducers/blogReducer'

import blogService from "./services/blogs";
import loginService from "./services/login";

import Login from "./components/Login";
import Blog from "./components/Blog";
import AddBlog from "./components/AddBlog";
import Togglable from "./components/Toggable";
import { useField } from "./Hooks/index";


const App = (props) => {
  const blogs = props.blogs

  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loginVisible, setLoginVisible] = useState(null);

  const hideWhenVisible = { display: loginVisible ? "none" : "" };
  const showWhenVisible = { display: loginVisible ? "" : "none" };

  const username = useField("text");
  const password = useField("password");
  const title = useField("text");
  const author = useField("text");
  const url = useField("text");

  const noteFormRef = React.createRef();

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username: username.value,
        password: password.value
      });

      window.localStorage.setItem("loggedBlogUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
    } catch (exception) {
      setErrorMessage("Wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem("loggedBlogUser");
    window.location.reload();
  };

  const handleNew = e => {
    e.preventDefault();
    noteFormRef.current.toggleVisibility();

    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value
    };
    blogService.create(blogObject).then(response => {
      addBlog(blogs.concat(response));
      setErrorMessage("New Blog Added!");
    });
  };

  useEffect(() => {
    props.initBlogs()
  }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("loggedBlogUser");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setUser(user);
      blogService.setToken(user.token);
    }
  }, []);

  return (
    <div className="App">
      <h4>{errorMessage}</h4>
      {user === null ? (
        <div>
          <div style={hideWhenVisible}>
            <button onClick={() => setLoginVisible(true)}>Login</button>
          </div>
          <div style={showWhenVisible}>
            <Login
              username={username}
              password={password}
              handleLogin={handleLogin}
            />
            <br />
            <button onClick={() => setLoginVisible(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <Fragment>
          <Togglable buttonLabel="New Blog" ref={noteFormRef}>
            <AddBlog
              handleNew={handleNew}
              title={title}
              author={author}
              url={url}
            />
          </Togglable>
          <Blog blog={blogs} user={user} logout={handleLogout} />
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    blogs: state.blogs,
    user: state.user
  };
};

const mapDispatchToProps = {
  initBlogs,
  addBlog
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
