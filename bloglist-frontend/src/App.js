import React, { useState, useEffect, Fragment } from "react";
import blogService from "./services/blogs";
import loginService from "./services/login";
import Login from "./components/Login";
import Blog from "./components/Blog";
import AddBlog from "./components/AddBlog";

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [url, setUrl] = useState("");
  const [user, setUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async event => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password
      });

      window.localStorage.setItem("loggedBlogUser", JSON.stringify(user));

      blogService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
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

    const blogObject = {
      title: title,
      author: author,
      url: url
    };
      blogService.create(blogObject).then(response => {
        setBlogs(blogs.concat(response));
        setTitle("");
        setAuthor("");
        setUrl("");
        setErrorMessage("New Person Added!");
      });
    };

  const handleTitle = e  => {
    setTitle(e.target.value);
  }
  const handleUrl = e  => {
    setUrl(e.target.value);
  }
  
  const handleAuthor = e  => {
    setAuthor(e.target.value);
  }

  useEffect(() => {
    blogService.getAll().then(response => setBlogs(response));
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
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
      ) : (
        <Fragment>
        <Blog blog={blogs} user={user} logout={handleLogout} />
          <AddBlog
            handleNew={handleNew}
            title={title}
            author={author}
            url={url}
            setAuthor={setAuthor}
            setTitle={setTitle}
            setUrl={setUrl}
            handleAuthor={handleAuthor}
            handleTitle={handleTitle}
            handleUrl={handleUrl}
          />
        </Fragment>
      )}
    </div>
  );
};

export default App;
