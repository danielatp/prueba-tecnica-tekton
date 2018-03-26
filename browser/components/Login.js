import React from 'react';
import { connect } from 'react-redux';
import { login } from '../store/user';

const Login = (props) => {
  return (
    <div>
      <h2>Let's get to work!</h2>
      <form onSubmit={props.handleSubmit}>
        <div>
          <label htmlFor="email"><small>Email</small></label>
          <input name="email" type="text" />
        </div>
        <div>
          <label htmlFor="password"><small>Password</small></label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit (event) {
      event.preventDefault()
      const email = event.target.email.value
      const password = event.target.password.value
      dispatch(login(email, password))
    }
  }
}

export default connect(null, mapDispatchToProps)(Login)
