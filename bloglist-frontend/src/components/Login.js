import React from 'react';

const Login = props => {
    return (
        <form onSubmit={props.handleLogin}>
        <h4>Login</h4>
        Username:
        <input
          type="text"
          name="Username"
          placeholder="Username"
          onChange={({ target }) => props.setUsername(target.value)}
          value={props.username}
        />{" "}
        <br />
        Password:
        <input
          type="password"
          name="Password"
          placeholder="Password"
          onChange={({ target }) => props.setPassword(target.value)}
          value={props.password}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    );
};

export default Login;