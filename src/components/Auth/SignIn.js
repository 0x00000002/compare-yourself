import React from 'react'
import { UserContext } from './UserContext'

const SignIn = (props) => (
  <UserContext.Consumer>
    { dispatch => {
      return (
        <button onClick={event => dispatch({ type: 'signIn' })}>
          Sign in
        </button>
      )
    }}
  </UserContext.Consumer>
)

export default SignIn
