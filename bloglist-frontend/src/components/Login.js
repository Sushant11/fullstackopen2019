import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ handleLogin, handleUsername, handlePassword, username, password }) => {
  return (
    <form onSubmit={handleLogin}>
      <h4>Login</h4>
        Username:
      <input
        type="text"
        name="Username"
        placeholder="Username"
        onChange={handleUsername}
        value={username}
      />{' '}
      <br />
        Password:
      <input
        type="password"
        name="Password"
        placeholder="Password"
        onChange={handlePassword}
        value={password}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default Login