import React from 'react'
import { UserContext } from './UserContext'

const SignIn = (props) => (
  <UserContext.Consumer>
    { auth => (
      <button onClick={event => auth.signin()}>
        Sign in
      </button>
    )}
  </UserContext.Consumer>
)

export default SignIn
