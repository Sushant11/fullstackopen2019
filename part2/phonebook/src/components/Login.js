import React from "react";

const Login =  props => {
  return (
    <form onSubmit={props.handleLogin}>
      <table>
        <tbody>
          <tr>
            <td>Username</td>
            <td>
              {" "}
              <input
                type="text"
                value={props.username}
                name="Username"
                onChange={({ target }) => props.setUsername(target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input
                type="password"
                value={props.password}
                name="Password"
                onChange={({ target }) => props.setPassword(target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button type="submit">Login</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
};

export default Login;
