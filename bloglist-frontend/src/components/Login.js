import React from 'react'
import PropTypes from 'prop-types'

const Login = ({ handleLogin, username, password }) => {
  return (
    <form onSubmit={handleLogin}>
      <h4>Login</h4>
        Username:
      <input
        {...username}
      />{' '}
      <br />
        Password:
      <input
        {...password}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
}

export default Login